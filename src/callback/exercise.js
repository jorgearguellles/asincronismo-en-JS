// Peticiones a APIs usando Callbacks

// XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch
// que es el actual, por que no conocemos aùn las promesas y fecth es con promesas,
// para saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar
// XMLHttpRequest: https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
	let xhttp = new XMLHttpRequest(); //Aquí creo una instancia del objet XMLHttpRequest(), que lo requerimos anteriormente y lo guardo en la cariable xhttp

	// xhttp.open("Tipo de petición CRUD", url del API que le vamos a pegar, true = para activar el asincronismo);
	xhttp.open("GET", url_api, true);

	xhttp.onreadystatechange = function (event) {
		//Valdación para ver si voy a ejecutar el callback
		//Valido si el estado en el cual se encuentra es satiasfactirio
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				//Estandar en Node: callback(ERROR, RESULTADO)
				//Dependiendo de la parte del proceso, yo decido si enviar el erorr o la posible data
				callback(null, JSON.parse(xhttp.responseText));
				//Como recibimos texto, lo parseamos/Analizamos el JSON para poder acceder a la infor que queramos
			} else {
				const error = new Error(
					"Error " + url_api + " status: " + xhttp.status
				);
				return callback(error, null);
			}
		}
	};
	xhttp.send();
}

//Breve explicación del interior de la función anterior que hará las peticiones a la API:

// Creamos una instancia con el objeto XMLHttpRequest que incluye diversos metodos y atributos que nos permiten manejar la solicitud.
// con el método object.open() inicializamos el pedido. Recibe los parametros (method, url, async, user, password).
// object.onreadystatechange define una funcion que se ejecutará cada vez que el atributo readyState cambie.
// los valores de readyState pueden ser los siguientes:
// 0: request no inicializado,
// 1: conexion con el servidor establecida,
// 2: solicitud recibida,
// 3: solicituid siendo procesada,
// 4: solicitud finalizada y respuesta lista.
// Los atributos status y statusText llevan el stado de el objeto XMLHttpRequest.
// 200: “OK”
// 403: “Forbidden”
// 404: “Page not found”
// Estos son los códigos más comunes.
// El atributo responseText lleva la respuesta en al pedido como texto,
// en el caso de nuestra solicitud a la API debemos convertirla a un
// documento JSON para poder acceder a sus elementos usando `JSON.parse(object.responseText).
// El método object.send() envia la solicitud.

fetchData(API, function (error1, data1) {
	if (error1) return console.error(error1);
	fetchData(API + data1.results[0].id, function (error2, data2) {
		if (error2) return console.error(error2);
		fetchData(data2.origin.url, function (error3, data3) {
			if (error3) return console.error(error3);
			console.log(data1.info.count); //Trae el número de personajes de la API
			console.log(data2.name); //De esa lista, trae el nombre del primer personaje
			console.log(data3.dimension); //Del primer personaje, trae la dimensión de donde es ese primer personaje
		});
	});
});

// fetchData(API, function (error1, data1) {
// 	if (error1) {
// 		return console.error(error1);
// 	} else {
// 		fetchData(
// 			API +
// 				data1.results.map(function (a) {
// 					return a.name;
// 				}),
// 			function (error2, data2) {
// 				if (error2) {
// 					return console.error(error2);
// 				} else {
// 					console.log(data2);
// 				}
// 			}
// 		);
// 	}
// });
