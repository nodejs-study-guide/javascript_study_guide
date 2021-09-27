// Standard builtin objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

console.log("EXAMPLE A")
// The "Date" is a commonly used builtin object. This object exists by default in the javascript run time.  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 
console.log(typeof Date)  // function     // functions are also a type of object. 

// This Date object has some methods:
console.log(Date.now())   // 1632588346184



// however other methods of Date (all the "prototype" methods), are accessible by creating an object of the type "Date". That's done using the "new" key word:


let dateStamp = new Date()


console.log(typeof dateStamp)  // object

console.log(dateStamp.getDate())




// I think when we write:

let s = "hello"

// javascript reads this as the following behind the scenes. 

let s = new String('hello')
console.log(s)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String