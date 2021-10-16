console.log("Example A")
// Another possibility that might exist, is the reverse of the above example, i.e you have a student object,
// and want to create a person object from it, here's an example:



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

	// we create this new static method here. 
	static fromEmployee(person){
		return new Person(person.firstName, person.lastName, person.age)
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

// we create the child object
let journalist = new Employee("Clark", "Kent", 32, 45000)

// we use the child object to create the parent object
let superman = Person.fromEmployee(journalist)


console.log(superman) // Person { firstName: 'Clark', lastName: 'Kent', age: 32 }
