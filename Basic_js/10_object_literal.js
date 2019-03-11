
// Create object
const person = {
    firstName :'Nahid',
    lastName : 'hasan',
    age :20,
    email : 'nahid76@gmail.com',
    hobbies: ['music', 'sports'],

    address: {
        city : 'NG',
        state : 'DK'
    },

    getBirthYear: function() {
        return 2019 - this.age;
    }


}

let val;

val = person.firstName;
val = person.address.state;
val = person.email
val = person['email'];
val = person.hobbies[1];
val = person.getBirthYear();
console.log(val);


// Array of object

const arrya_object = [
    {name: 'Ali', age:20},
    {name: 'Alex', age: 34},
    {name: 'Messi', age: 30}
]

for(let i = 0; i<arrya_object.length; i++){
    console.table(arrya_object[i]);
}