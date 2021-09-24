

if (false){
	console.log("doesn't get executed")   
} else {
	console.log("boolean of false, is false")   // this get's executed.  
}





if ("" || ''){
	console.log("doesn't get executed")   
} else {
	console.log("empty string are treated as false")   // this get's executed.  
}

if (0){
	console.log("doesn't get executed")   
} else {
	console.log("The number 0 are treated as false")   // this get's executed.  
}


let priceA
console.log(priceA)
if (priceA){
	console.log("doesn't get executed")   
} else {

	console.log("Undefined variables are treated as false")   // this get's executed.  
}

let priceB = 10
priceB = null
console.log(priceB)
if (priceB){
	console.log("doesn't get executed")   
} else {

	console.log("Null variables are treated as false")   // this get's executed.  
}

let invalidNumber = Number.parseFloat("Hello123")
console.log(invalidNumber)   //  NaN        // Not-a-Number error message
if (invalidNumber){
	console.log("doesn't get executed")   
} else {
	console.log("NaN are treated as false")   // this get's executed.  
}


// Everyting else is treated as true. e.g. 

if ("hello"){
	console.log("Any non empty string is treated as true")     // this get's executed.  
} else {
	console.log("doesn't get executed") 
}

if (5){
	console.log("Any non-zero number is treated as true")     // this get's executed.  
} else {
	console.log("doesn't get executed") 
}

