'use strict'


// function myFunc(){

// }

// console.log(Object.getOwnPropertyNames(Date.prototype))
// console.log((Date.prototype.constructor))


// let myObject = [4,6]
// console.log(Object.getPrototypeOf(myObject).toString)

// let FruitsA = ["Apple","Banana"]
// console.log(Object.getOwnPropertyNames(FruitsA))



// let FruitsB = new Array(2)
// FruitsB[0] = "Mango"
// FruitsB[1] = "Orange"

// console.log(Object.getOwnPropertyNames(FruitsB))

// //console.log(Object.getOwnPropertyNames(Array.prototype))


// console.log(FruitsA instanceof Array) // true
// console.log(FruitsB instanceof Array) // true

// console.log(Array.prototype)


function Person(name,age){
	this.name = name
	this.age = age
}

Person.prototype.title = "Mr"


let pete = new Person("Pete", 18)

console.log(Person.prototype)
