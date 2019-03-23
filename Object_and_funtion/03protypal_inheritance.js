
// Person constructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Nahid','hasan');

console.log(person1.greeting())

// customer constructor

function Customer(firstName, lastName,phone,city){
    Person.call(this,firstName, lastName);

    this.phone = phone;
    this.city = city;
}

// Inherit person prototype method
Customer.prototype = Object.create(Person.prototype)
// Create customer

const customer = new Customer('Akash','chowdory', '90909090','Duahar');



console.log(customer.greeting())

//  overid person  greeting

Customer.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}, well-come`;
}

// After overiding
console.log(customer.greeting())