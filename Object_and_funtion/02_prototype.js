
//  Person constructor

function Person(firstName,lastName, yearOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;

    this.calculateAge = function(){
        return 2019 - this.yearOfBirth;
    }
}


Person.prototype.calculateAge = function() {
    return 2019 - this.yearOfBirth;
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getMarride = function(newLastName){
    this.lastName = newLastName;
}

const nahid = new Person('Nahid','hasan', 1995);
const karim = new Person('Karim','Hider', 1992)

console.log(nahid.calculateAge())
console.log(karim.calculateAge())
console.log(karim.fullName())
console.log(nahid.fullName())

//  Nahid married
nahid.getMarride('nahida')
console.log(nahid.fullName())