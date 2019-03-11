let val;

// Number to string
val = String(55);
val = String(5+5);

// Bool to string
val = String(false);

// Date to string
val = String(new Date());

// Array to string
val = String([2,3,4,5]);

// toString()

val = (7).toString();
val = (true).toString();

// String to number

val = Number('6');
val = Number('6.666');
val = Number(true);
val = Number(false);
val = Number('adsflasfdj') // NaN
val = Number([1,2,3,4]) // NaN

val = parseInt('45'); // 45
val = parseInt('45.66'); // 45
val = parseFloat('45.66'); // 45.66



// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));


const val1 = '7';
const val2 = 8;
const sum = val1 + val2;
console.log(sum);
console.log(typeof(sum));



