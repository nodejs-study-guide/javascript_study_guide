console.log("Example A")
// here we give an example of a real world example of using inheritance and static properties/methods
// together.  

// There can be times where you have a object from a parent class (Person), and you want to use
// that object create an object from a child class (employee). E.g. a person applys for a job
// in which case they are a "person" object, but if they pass the job interview, they become an
// "employee"



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


class Employee extends Person {

	constructor(forename, surname, age, annualSalary){
		super(forename, surname, age)
		this.salary = annualSalary
	}

	static fromPerson(person, salary){
		return new Employee(person.firstName, person.lastName, person.age, salary)
	} 
	
}

let Superman = new Person("Clark", "Kent", 32)
let journalist = Employee.fromPerson(Superman, 45000)


console.log(journalist) // this prints:
// Employee {
// 	firstName: 'Clark',
// 	lastName: 'Kent',
// 	age: 32,
// 	salary: 45000
//   }