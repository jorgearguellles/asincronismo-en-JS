const doSomethingAsync = () => {
	let time = 3000;
	return new Promise((resolve, reject) => {
		true
			? setTimeout(
					() =>
						resolve(
							`Yes, we can do something Async, past: ${time} milisegundos`
						),
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

console.log("Before:");
doSomething();
console.log("After:");
