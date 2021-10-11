console.log("Example A")


// here's a constructor function
function PersonX(forename, surname) {
	this.firstName = forename
	this.lastName = surname
	Object.defineProperty(this, 'fullname', {
		get: function () {
			return this.firstName + ' ' + this.lastName
		},
		enumerable: true,
	})
}

console.log(PersonX.prototype) // {}
console.log(PersonX.prototype.constructor.toString())  // This basically holds the PersonX function
console.log(PersonX.toString())  // this gives the same output as above.  


console.log("Example B")
// Now let's take a look at this constructor function:
function StudentB(forename, surname) {
	this.firstName = forename
	this.lastName = surname
	Object.defineProperty(this, 'fullname', {
		get: function () {
			return this.firstName + ' ' + this.lastName
		},
		enumerable: true,
	})

	this.degree = degree
	Object.defineProperty(this, 'degreeName', {
		get: function (nameOfDegree) {
			return this.degree = nameOfDegree
		},
		enumerable: true,
	})	
}

// This function is identical to the PersonX function, the only difference being the degree related code block.
// i.e.  The StudentB constructor is an extension to the PersonX constructor. 

// hence, in order to cut down on duplication, it would be nicer, if the StudentA constructor inherits PersonB constructor's properties and methods.  

// This inheritance can be set up, as in this example:

console.log("Example C")
// Now let's take a look at this constructor function:
function StudentC(forename, surname) {
	// PersonX.call(this, forename, surname)
	this.degree = ""
	Object.defineProperty(this, 'degreeName', {
		set: function (nameOfDegree) {
			this.degree = nameOfDegree
		},
		enumerable: true,
	})	
}
// Here we're replacing the StudentC.prototype's default object, with a copy of PersonX.prototype's object. 
// PersonX.prototype is actually just a memory pointer to where the PersonX.prototype's object is actually
// stored in memory. 
// So we want to make a copy of the actual object, rather than creating another pointer to the same object,
// which is why we used the Object.create() method to do this "deep copy" 
StudentC.prototype = Object.create(PersonX.prototype)  

// However we want to keep the constructor the same, so we restore this back to what it was:
StudentC.prototype.constructor = StudentC

// The above 2 lines, essentially is what creates the prototype inheritance. 


let peteC = new StudentC("Peter", "Parker")
peteC.degreeName = "Maths"

// However this output still doesn't show PersonX properties yet, e.g. firstName and lastName. 
console.log(peteC) // StudentC { degree: 'Maths', degreeName: [Setter] }

// to fix this, we need to use the "call" method, as shown in the next example. 




console.log("Example D")
// This example is identical to the previous example, except for the use of the "call"  line. 
function StudentD(forename, surname) {
	PersonX.call(this, forename, surname)         // here's the extra line, that runs the "call" method. 
	this.degree = ""
	Object.defineProperty(this, 'degreeName', {
		set: function (nameOfDegree) {
			this.degree = nameOfDegree
		},
		enumerable: true,
	})	
}

// Oddly, everything still works if you comment out these 2 lines. 
StudentD.prototype = Object.create(PersonX.prototype)  
StudentD.prototype.constructor = StudentD


let peteD = new StudentD("Peter", "Parker")
peteC.degreeName = "Maths"
 
console.log(peteD)

// Also the PersonX function's getter works
console.log(peteD.fullname) // Peter Parker









// further reading:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
// https://javascript.info/prototype-inheritance
// 

