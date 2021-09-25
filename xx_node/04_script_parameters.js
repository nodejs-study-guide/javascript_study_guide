// node's builtin in 'process' object gives you access to script parameter's via "argv" sub object


console.log("first parameter is: " + process.argv[0])
console.log("second parameter is: " + process.argv[1])
console.log("third parameter is: " + process.argv[2])
console.log("fourth parameter is: " + process.argv[3])
console.log("fifth parameter is: " + process.argv[4])

// all script parameters are treated as strings. 

// try running:
// node 04_script_parameters.js hello world

