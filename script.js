var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 
var btn = document.getElementById("btn");


var compStyle = window.getComputedStyle(body);
var stringaya = compStyle.getPropertyValue('background-image');
var firstColor = stringaya.substring(stringaya.indexOf('rgb(') + 4 , stringaya.lastIndexOf('),'));
var secondColor = stringaya.substring(stringaya.lastIndexOf('rgb(') + 4, stringaya.indexOf('))'));
// console.log(stringaya);
// console.log(firstColor);
// console.log(secondColor);
// console.log(rgbToHex(firstColor));


// initially inputs have the same color as the bkgrnd
color1.value = rgbToHex(firstColor);
color2.value = rgbToHex(secondColor);

css.textContent = "linear-gradient(to right, " + color1.value + "," + color2.value + ");";

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(a) {
	var r = [];
	r = a.split(',');

	for (var i = 0; i < r.length; i++) {
		r[i] = Number(r[i]);
	}
    return "#" + componentToHex(r[0]) + componentToHex(r[1]) + componentToHex(r[2]);
}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColor() {
	var col1 = getRandomColor();
	var col2 = getRandomColor();

	color1.value = col1;
	color2.value = col2;

	setGradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColor);