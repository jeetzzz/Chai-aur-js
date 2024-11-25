const score = 254
// console.log(score)      // automatically defined of the Number type by value

const balance = new Number(100)
// console.log(balance)    // Number is specifically mentioned in the output just because while declaring the variable we insisted on the datatype being Number, creating an object

// converting balance to string; Once we convert it into string, the predefined function for strings can also be applied on the converted variable
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));    // changes the precision value to the no. of digits mentioned in the braces; especially used in E-commerce Companies

const otherNumber = 1234.8966
// console.log(otherNumber.toPrecision(3))      // when 23.8966 => 23.9
// console.log(otherNumber.toPrecision(3))      // when 123.8966 => 124
// console.log(otherNumber.toPrecision(4))      // when 123.8966 => 123.9
// console.log(otherNumber.toPrecision(4))      // when 1234.8966 => 1235
// console.log(otherNumber.toPrecision(3))      // when 123.8966 => 1.23e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))       // For Indian Standard specify 'en-IN'; bydefault we get the US standard



// ********************************************************* MATHS **********************************************************

// console.log(Math);
// console.log(Math.abs(-4))        // absolute value changes the negative number into it's positive counterpart only and not the vice-versa.
// console.log(Math.round(4.6))     // rounds off the value to the nearest integer
// console.log(Math.ceil(4.2))      // gives upper limit of the number provided
// console.log(Math.floor(4.8))     // gives lower limit of the number provided
// console.log(Math.min(4, 3, 5, 8))        // gives the min value in the set of numbers provided
// console.log(Math.max(4, 3, 5, 8))        // gives max value in the set of numbers provided 

// console.log(Math.random());         // always gives a value between the range of 0 and 1
// console.log((Math.random() * 10) + 1);
// console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// max-min to get the range of the value we need
// (max-min) + 1 to get atleast 1 and remove the scope of 0
// (max-min) + 1 + min to make sure we get at least the min value or the final outcome is greater than at least the min value