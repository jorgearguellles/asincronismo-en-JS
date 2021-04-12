// las promesas usan el objeto Promise para ser ejecutadas
// algo va a suceder... no sabemos cuando: ahora, mañana o nunca
//ECMAScript 6 en adelante...

//Promises structure:

//new Promise( function (resolve = la data si se ejecuta bien, resolve = la data si es rechazada la petición) )

const myFirstPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve("Hola, si resolvio la petición");
		} else {
			reject("Hola, no resolvio la petición");
		}
	});
};

//Así se ejecutan las promesas:
myFirstPromise()
	.then((answer) => console.log(answer))
	.catch((error) => console.log(error));

// /EJEMPLO

const mySecondPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve("Si se resolvio");
			}, 3000);
		} else {
			const error = new Error("No se resolvio");
			reject(error);
		}
	});
};

mySecondPromise()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

// ¿Cómo ejecuto promesas anidadas?

Promise.all([myFirstPromise(), mySecondPromise()])
	.then((response) => {
		console.log("Result´s Array:", response);
	})
	.catch((error) => {
		console.log("Error:", error);
	});

Promise.all([mySecondPromise(), myFirstPromise()])
	.then((response) => {
		console.log("Result´s Array:", response);
	})
	.catch((error) => {
		console.log("Error:", error);
	});
