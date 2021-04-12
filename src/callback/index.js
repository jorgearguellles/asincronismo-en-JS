// Basic callbacks structure

//What is a Callback?
// A Callback is a function passed as a parameter that should be called later
// (after the asynchronous code finishes executing).

function plus(a, b) {
	return a + b;
}

function calculate(a, b, callback) {
	return callback(a, b);
}

console.log(calculate(10, 20, plus));

// function calculate = Primary order function, because receive a function like a parameter
// function plus = callback function, because is a parameter of function calculate

//Example:

function date(callback) {
	// console.log(new Date());

	setTimeout(function () {
		let date = new Date();
		callback(date);
	}, 3000);
}

function printDate(dateNow) {
	console.log(dateNow);
}

date(printDate);

// Example 2:
function dog() {
	return "woof";
}
function cat() {
	return "meow";
}
function speak(callbackFunction) {
	return callbackFunction();
}
// speak(dog); // Result: 'woof'
// speak(cat); // Result: 'meow'
console.log(speak(dog));
console.log(speak(cat));

// Example 3:

function saludar(nombre) {
	console.log("Hola " + nombre);
}

function procesarEntradaUsuario(nombre, callback) {
	callback(nombre);
}

procesarEntradaUsuario("Jorge", saludar);
