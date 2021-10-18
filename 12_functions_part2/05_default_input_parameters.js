// functions can have default input parameters. 
// Here's an example of some default parameters:

function greetings(name = "World"){
	console.log("Hello " + name)
}

greetings()   // Hello World
greetings("Peter") // Hello Peter