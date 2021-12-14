'use strict'

setTimeout(() => {
	console.log("this gets printed after a very long time.")
}, 1000)

for (let i = 0 ; i < 1e10; i++){
	// this loops billions of times. 
}
