// what if there's a function that you want to use. But that function requires a promises an input paramter, e.g.:

function logToConsole(aPromise){
	aPromise.then(
		value => {
			console.log(value)
		}
	)
}


let msg1 = new Promise((resolve) =>{
	resolve("hello1")
})

logToConsole(msg1)


// the above let statemment can be written in a more shorthand form using Promise.resolve():

let msg2 = Promise.resolve("hello2")


logToConsole(msg2)





// Similarly we have Promise.reject()

function advancedLogToConsole(aPromise){
	aPromise.then(
		value => {
			console.log(value)
		},
		value => {
			console.error("Encountered the following error:", value)
		}	
	)
}

let msg3 = Promise.reject("This is an error")

advancedLogToConsole(msg3)