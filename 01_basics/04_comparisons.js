// console.log(2 > 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 > 1)
// Above lines of code have no Issue what-so-ever and prints either true or false on the console according to the condition

// The Actual Problem arises when we compare two different DataTypes(which is not allowed in typeScript, by default)
// Sometimes the Output is not according to the Correct logic and may differ when the dataTypes of Operand are not same
// Due to which sometimes in Js we do not get the predictable Result, So we need to ensure that datatypes of both the operands are same while comparing by default
// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0);  // false
console.log(null >= 0)  // true
console.log(null == 0)  // false
// null >= 0 condition is apparently not true
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's Why (3)null >= 0 is true while (1)null > 0 is false
// In Case of Equality check, null is converted into NaN and certainly NaN and 0 are not equal, hence false

// console.log(undefined > 0)      // false
// console.log(undefined == 0)     // false
// console.log(undefined <= 0);    // false

// Comparisons of "undefined" and "null" are not a good practice to be used in work, because everytime they can change to NaN or 0 or anything else for a reason according to the working syntax
// and we may not get a clue of it everytime

// All in all, remember that both Double Equal and Comparison Operators work differently in Js, both have a different syntax of working

// === => Strict Check
// Not only checks the value but also check whether the datatypes of both the operands are also same

console.log("2" == 2)   // True; Double Equal check first converts content on both the sides if feasible then compares them 
console.log("2" === 2)  // False; Strict Check, checks exactly if contents on both sides are equal exactly and does not converts to any particular dataType because it also checks for same dataType on both sides

