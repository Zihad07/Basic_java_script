const firstName = 'Alexy';
const lastName = 'Costa';
const age = 22;
const details = 'my name is heloo';
const tags = 'web development,programming,Graphis Desinger';
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Tom ';
val += 'jerry';

val = 'Hell my name is ' + firstName + ' and i am '+ age+' year old';
val = 'that\'s awsome, i can\'t wait';

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName.indexOf('A');
val = firstName.lastIndexOf('y');

val = firstName.charAt(1);
val = firstName.charAt(firstName.length - 1);


// Substring

val = firstName.substring(0,3);
val = firstName.slice(0,4)
val = firstName.slice(-3)

// Split
val = details.split(' ')
val = tags.split(',')

// Rplace()

val = details.replace('heloo', 'hello');

// includes()
val = details.includes('heloo')

console.log(val);