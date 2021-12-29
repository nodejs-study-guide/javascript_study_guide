'use strict'

console.log("Example A")
// There are some classes that can be very similar, e.g. classes called "employee", "customer",
// "student", are all likely to have similar properties, e.g. firstname, lastname, age,...etc. 
// similar classes like this leads to code duplication. That's why it's better, to 
// create classes with parent-child relationship, where appropriate. E.g. a parent class
// can be "Person", and it's child classes are "employee", "customer", "student"...etc. 
// These child classes inherits properties/methods from the parent class. 
class Person {

	constructor(foreName, surName, age) {
		this.firstName = foreName
		this.lastName = surName
		this.age = age
	}

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	set fullName(value) {
		this.firstName = value.split(' ')[0]
		this.lastName = value.split(' ')[1]
	}


	isAdult() {
        return this.age >= 18
    }

}

// here we use the "extend" keyword to say that the "Employee" class inherits from
// the Person class. 
class Employee extends Person {

	constructor(forename, surname, age, annualSalary){
		super(forename, surname, age)
		this.salary = annualSalary
	}

	payRaise() {
		this.salary = this.salary + 5000
	}

	// Notice it's quite easy to use parent's getter/setters, (fullName)
	currentProfile(){
		return this.fullName + " has annual salary of " + this.salary
	}

	
}

let Superman = new Employee("Clark", "Kent", 32, 45000 )

console.log(Superman) // this list out parent's properties just as if it's it's own. 

console.log(Superman.fullName)   // Clark Kent 
console.log(Superman.isAdult())  // true

console.log(Superman.salary) // 45000
Superman.payRaise()
console.log(Superman.salary) // 50000 



// as you can see, the syntax of classes is much nicer when compared to constructor functions. 
// Hence why classes are used more often than constructor functions.
