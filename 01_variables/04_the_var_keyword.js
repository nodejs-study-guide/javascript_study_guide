// node 01_variables/04_the_var_keyword.js 

// When declaring variables, you can use the "var" key word as an alternative to the "let" key word. 


// EXAMPLE A
var greetingsA = "helloA"
console.log(greetingsA)



// EXAMPLE B
// However it's bad practice to use the `var` key word at all. That's because
// javascript code is designed to run from top to bottom, but "var" key word can circumvent that,
// making code to follow and debug
console.log(greetingsB)
var greetingsB = "helloB"     // undefined     // i.e. we're not getting an error. 