var firstNumber = 0;
var secondNumber = 0;
var symbol = "";

function insertNumber(number) {
	var current = document.getElementById("field").value;
	document.getElementById("field").value = current + number;
}

function action(func) {
	symbol = func
	firstNumber = document.getElementById("field").value;
	document.getElementById("field").value = "";
}

function equal() {
	var result = 0;
	secondNumber = document.getElementById("field").value;
	
	if (symbol == "+") {
		result = Number(firstNumber) + Number(secondNumber);
	} else if (symbol == "/") {
		result = Number(firstNumber) / Number(secondNumber);
	} else if (symbol == "x") {
		result = Number(firstNumber) * Number(secondNumber);
	} else if (symbol == "-") {
		result = Number(firstNumber) - Number(secondNumber);
	}
	
	document.getElementById("field").value = result;
}

function clear() {
	firstNumber = 0;
	secondNumber = 0;
	symbol = "";
	document.getElementById("field").value = "";
}

