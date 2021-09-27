// switch statement. 


console.log("EXAMPLE A")


let msgA = "hello"

switch(msgA){
	case "hi":
		console.log("message is: hi")
		break
	case "hello":
		console.log("message is: hello")
		break
	case "bye":
		console.log("message is: bye")
		break
	case "goodbye":
		console.log("message is: goodbye")
		break
	default:
		console.log("message is of an unknown type")
		break
}

// The default block can be placed anywhere, it doesn't have to be at the bottom. But the convention is to put it at the bottom. 



// you have to put "break" at the end of each case block.  Otherwise it will automatically fall through 
// the successive blocks, until it reach either reaches the next break line, or reaches the end of switch block,
// whichever comes first. Here's an example:


console.log("EXAMPLE B")
let colorB = "Pink"

switch(colorB){
	case "bye":
		console.log("message is: bye")
		break
	case "Red":
	case "Pink":
		console.log("Color is a shade of red")
		break
	case "black":
		console.log("message is: goodbye")
		break
	default:
		console.log("This color is unkown")
		break
}

// This kind of works like a if statement combineid with an "or" operator. E.g. if (color == red || color == pink)




console.log("EXAMPLE C")
// switch statements by default does a strict (value and data type comparison), (===). So this example triggers the default case-block 
// because the value matched, but string type didn't match with number data type. 

let msgC = "2"

switch(msgC){
	case 1:
		console.log("found number 1")
		break
	case 2:
		console.log("found number 2")
		break
	case 3:
		console.log("found number 3")
		break
	case 4:
		console.log("found number 4")
		break
	default:
		console.log("Unable to determine the number's value")
		break
}



console.log("EXAMPLE D")
// The case blocks all share the same scope. So declaring the same variable within each case block (e.g.  'msg'), will throw the 
// "SyntaxError: Identifier 'msg' has already been declared" error. To prevent this, we simply add in some curly brackets
// to enclose each case block into it's own scope:


let msgD = 2

switch(msgD){
	case 1: {
		let msg = "found number 1"
		console.log(msg)
		break
	}
	case 2:{
		let msg = "found number 2"
		console.log(msg)
		break
	}
	case 3:{
		let msg = "found number 3"
		console.log(msg)
		break
	}
	case 4:{
		let msg = "found number 4"
		console.log(msg)
		break
	}
	default:{
		let msg = "Unable to determine the number's value"
		console.log(msg)
		break
	}
}