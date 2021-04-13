let x = 10;
console.log("1. Process started...");

setTimeout(() => {
	x = x * 3 + 2;
	console.log("2. Processing... ");
}, 3000);

console.log("3. Process ended:", x);

// 1. Process started...
// 3. Process ended: 10
// 2. Processing...

//Cómo puedo usar las Promesas para vilver el código anterior asincrono y que de el resultado correcto...

let y = 10;
console.log("A. Process started...");
const myPromises = new Promise((resolve, reject) => {
	setTimeout(() => {
		y = y * 3 + 2;
		console.log("B. Processing... ");
		resolve(y);
	}, 3000);
});

myPromises.then((resolve) => {
	console.log("C. Process ended:", resolve);
});

// A. Process started...
// B. Processing...
// C. Process ended: 32
