
// ES6 CLASS

class Person {
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    // prototype

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLastName){this.lastName = newLastName; }
}

const nahid = new Person('Nahid', 'hasan', '1-12-1999');
console.log(nahid.greeting())
console.log(nahid.calculateAge())
