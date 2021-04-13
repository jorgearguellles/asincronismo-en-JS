const doSomethingAsync = () => {
	let time = 3000;
	return new Promise((resolve, reject) => {
		true
			? setTimeout(
					() =>
						resolve(`Yes, we do something Async, past: ${time} milisegundos`),
					`${time}`
			  )
			: reject(new Error("No, we can do something Async"));
	});
};

// Así ejecutamos una función async

const doSomething = async () => {
	const something = await doSomethingAsync();
	console.log(something);
};

console.log("Before1:");
doSomething();
console.log("After1:");

//Example 2: Async

const another = async () => {
	try {
		const something = await doSomethingAsync();
		console.log(something);
	} catch (error) {
		console.error(error);
	}
};

console.log("Before2:");
another();
console.log("After2:");
