// plain javasript works for declaring a variable
let helloWorld = "Hello World"
console.log(helloWorld)

// That's because, typescript is smart enough to work it out for you. 

// Here's the more explicit approach. Being more explicit is recommeded.
// This is called annotating a variable. 
let employeeName:string = "John Smith"
console.log(employeeName)

// you can declar a variable and then assign a value to it later. 
let employeeName2:string 
// console.log(employeeName2) // vs code gives an error if you try to use a value before you assign a value to it. 
employeeName2 = "David smith"
console.log(employeeName2)
