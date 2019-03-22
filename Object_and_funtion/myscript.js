
// Function constructor

/*
var john = {
    name :'zahid',
    yearOfBirth : 2000,
    job : 'student'
}

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // this.calculateAge = function(){
    //     console.log(2019 - this.yearOfBirth);
    // }
}

//  prototype method
Person.prototype.calculateAge = function(){
    // console.log(2019 - this.yearOfBirth);
    return 2019-this.yearOfBirth;
}

// Person.prototype.toString = function() {
//     console.log(`${this.name} is ${this.calculateAge()} years and a ${this.job}`);
// }

Person.prototype.lastName = 'costa'

var nahid = new Person('Nahid', 1996,'Part-time');


var akash = new Person('Akash',1995, 'studennt');
nahid.calculateAge();
akash.calculateAge();

// nahid.toString()
// akash.toString()

console.log(nahid.lastName);
console.log(akash.lastName);
*/

// Object.create
//  another way protype craeate

/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth)
    }
}

var nahid = Object.create(personProto)
nahid.name = 'Nahid';
nahid.yearOfBirth = 1999;
nahid.job = 'Part-timer'


//  another way

var akash = Object.create(personProto,{
    name : {value: 'akash'},
    yearOfBirth : {value: 2000},
    job : {value: 'Desinger'}
});

*/

//  Primitives vs objects

/*
var a = 24;
var b = a;

a = 20;
console.log('a -> ',a);
console.log('b -> ', b);

// objects

var obj1 = {
    name : 'Nahid',
    city : 'DH'
}

var obj2 = obj1;
obj2.city = 'DH-BD';
console.log(obj1.city);
console.log(obj2.city);

//  function

var age = 12;
var obj = {
    name : 'Akash',
    city : 'Dhaka'
}

function change(a,b){
    a = 16;
    b.city = 'Dhaka - BD'
}

change(age, obj);
console.log('age - >',age);
console.log('city -> ',obj.city);
*/

// Passing function as argument

/*
var years = [1990,1965,1937,2005,1998]

function arrayCalc(arr,fn){
    var arrRes = []
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(element){
    return 2019 - element;
}

function isFullAge(element){
    return element >= 18;
}

function maxHeartRate(element){
    if(element>= 18 && element <= 90){
        return Math.round(206.9-(0.67*element));
    }else{
        return -1;
    }
}
var ages = arrayCalc(years, calculateAge);
var fullages = arrayCalc(ages,isFullAge);
var hearRates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(hearRates);
console.log(fullages)

*/

// Function Returning function
/*
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, '+ name);
        }
    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var desingerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('other');
*/

// IIFE

// function game() {
//     var score = Math.random()*10;
//     console.log(score>=5);
// }

// game();

/*
(function(){
    var score = Math.random()*10;
    console.log(score>=5);
})();

(function(number){
    var score = Math.random()*10;
    console.log(score>=5*number);
})(2);
*/


// Closures
/*
function retirement(retirementAge){
    var msg = ' years left until retirement';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + msg)
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementUS(1990);
retirementIceland(1990);
retirementGermany(1990);
*/

// another example closures
/*
function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){console.log(name + ', can you please explain what UX design is');}
        else if(job === 'teacher'){ console.log('What subject do you teach, '+ name);}
        else{console.log('Hello '+ name + ', what do you do?');}
    }
}

var teacherQuestion = interviewQuestion('teacher');
var desingerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('other');

interviewQuestion('')('Nahid');
teacherQuestion('Akasd')
desingerQuestion('Ferdus')

*/


// call, Apply, Bind


var nahid = {
    name : 'Nahid',
    age : 22,
    job : 'Teacher',

    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }

};

var oyon = {
    name : 'Oyon',
    age : 15,
    job : 'studennt'
}

//  call method

nahid.presentation.call(oyon,'formal','morning')

//  apply

// nahid.presentation.apply(oyon,['frindly', 'afternood'])

// bind method
// bind method can pre-reset the funtion perameter
var nahidFormal = nahid.presentation.bind(nahid,'formal');
nahidFormal('night');
nahidFormal('afternoon');

// nahid.presentation.bind(oyon,'friendly','morning')();

var oyonFormal = nahid.presentation.bind(oyon,'formal');
oyonFormal('afternoon');


// another example

var years = [1990,1965,1937,2005,1998]

function arrayCalc(arr,fn){
    var arrRes = []
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(element){
    return 2019 - element;
}

function isFullAge(limit,element){
    return element >= limit;
}


var ages = arrayCalc(years,calculateAge);
console.log(ages)
//  for jpan limit 20
var fullAgeJapan = arrayCalc(ages,isFullAge.bind(this,22));
console.log(fullAgeJapan);



