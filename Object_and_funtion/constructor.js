
//  Person constructor

function Person(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;

    this.calculateAge = function(){
        return 2019 - this.yearOfBirth;
    }
}


const nahid = new Person('Nahid', 1995);

console.log(nahid.calculateAge())