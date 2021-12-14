// node's builtin in 'process' object gives you access to script parameter's via "argv" sub object


console.log("first parameter is: " + process.argv[0])
console.log("second parameter is: " + process.argv[1])
console.log("third parameter is: " + process.argv[2])
console.log("fourth parameter is: " + process.argv[3])
console.log("fifth parameter is: " + process.argv[4])

// all script parameters are treated as strings. 

// try running:
// node 10_script_parameters.js hello world

// You can also see this by running:
// node -p "process.argv" hello world

// btw, to see all process info, do:
// $ node -p "process"


// Now try running:
// VAL1="Good" VAL2="Bye" node 10_script_parameters.js
// these access your terminal's environment variables. 

console.log("EXAMPLE B")
console.log("first parameter is: " + process.env.USER)
console.log("first parameter is: " + process.env.VAL1)
console.log("first parameter is: " + process.env.VAL2)

