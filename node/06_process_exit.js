setTimeout( () => {process.exit()}  , 5000)

process.on(
	'exit',

	() => {

		console.log("About to exit this script as 5second timeout has been reached")
	}

)

console.log("hello")