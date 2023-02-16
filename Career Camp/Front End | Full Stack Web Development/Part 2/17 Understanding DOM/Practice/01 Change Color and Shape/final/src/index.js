// Changing  Color
const outerDiv = document.querySelector('#outer-div');

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {
	var hexColor = '#';
	for (var i = 0; i < 6; i++) {
		hexColor += getRandomNumber(hexColors);
	}
	console.log('Color Changed to: ' + hexColor);
	outerDiv.style.backgroundColor = hexColor;
}

// Changing Shapes
const innerDiv = document.querySelector('#inner-div');

const shapes = [
	'circle',
	'isosceles-left-triangle',
	'isosceles-right-triangle',
	'rectangle',
	'square',
	'triangle',
];

function changeShape() {
	var previousShape = innerDiv.classList[0];
	var currentShape = getRandomNumber(shapes);
	console.log('Current Shape is: ' + currentShape);
	innerDiv.classList.replace(previousShape, currentShape);
}

// Utils
function getRandomNumber(arr) {
	var n = arr.length;
	return arr[Math.floor(Math.random() * n)];
}
