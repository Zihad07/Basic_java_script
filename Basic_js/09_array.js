
const numbers = [22,34,5,6,77,34];
const number2 = new Array(1.2,4,4.444);
const fruits = ['apple', 'bananaa','jackfruits'];
const mixed  = [2,4.44, true,false, 'hello', new Date(),]
let val;
// get arry length
val = numbers.length;

// check if is array

val = Array.isArray(numbers);

// get single value
val = numbers[3];
val = numbers[2];

// insert in- to array

numbers[3] = 1000;

// find index of value

val = numbers.indexOf(5);

// MUTATING ARRAYS

// Add on to end
numbers.push(56);
// Add on to fornt;
numbers.unshift('first');

// Take off frim end
numbers.pop();
// Take off from first
numbers.shift();

// Splice values
numbers.splice(0,2);

//
// val = numbers.slice();

// concatanation
val = numbers.concat(number2);

//
val = numbers.sort();
val = numbers.sort(function(x, y){
    return x-y; // Assending order
})

val = numbers.sort(function(x,y){
    return y-x; // Descending order
})
console.log(numbers);
console.log(val);



