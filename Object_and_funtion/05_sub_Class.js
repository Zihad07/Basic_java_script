
// ES6 CLASS

class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
       
    }

    // prototype

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

   

    getMarried(newLastName){this.lastName = newLastName; }
}

// Sub class
class Customer extends Person {
    constructor(firstName, lastName, phone){
        super(firstName,lastName);

        this.phone = phone;
    }

    // override method
    greeting(){
        return `Well-come ${this.firstName} ${this.lastName}`;
    }
}

const nahid = new Person('Nahid', 'hasan');
console.log(nahid.greeting())

const customer1 = new Customer('Alex', 'Costa','070707070');
// console.log(customer1);
console.log(customer1.greeting())