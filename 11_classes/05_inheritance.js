console.log("Example A")

class PersonA {

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