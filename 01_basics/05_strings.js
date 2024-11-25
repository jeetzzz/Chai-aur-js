// In Console, we declare strings using "" and to attach/concatenate we can simply use a '+' operator b/w the two string values
// But when we write a string in program, we need to take it in a variable first
// This is one way of declaring a string
const name = "Subhajit "
const repoCount = 2

// Another Way of declaring a string is using 'new' keyword which comes under the objects category of Js
const gameName = new String('Shubhhzzz-sb-idb')
// In the above form of declaration of a string, the letters are stored in key-value pair.

// console.log(name + repoCount + " Repositories");
// The above one is kind of Old fashioned Syntax and is used in lesser frequency nowadays.

// In the present, `` are used for String Interpolation, meaning we create Place holders(${}) and in these we can directly inject the variable.
// console.log(`Hello!!, My name is ${name} and there are ${repoCount} repositories in my github profile as of now.`);

// console.log(gameName[0]);   // To access the key-value pair
// console.log(gameName.__proto__)

// use of some of the objects
// console.log(gameName.length);

// console.log(gameName.toUpperCase()); // In prototype, 'f' represents function, which are predefined and can be used directly

console.log(gameName.charAt(2)) // To give the index of string whose value we want to know
console.log(gameName.indexOf('z')) // To know the index of a char present in the string

const newString = gameName.substring(0, 4)
// console.log(newString); // last value we provide in the braces of substring is not included in the final result
// Negative numbers cannot be used in this substring function and even if used they do not impact to the output


// With slice we can also use negative numbers also, and in case of negative numbers, we get the string printed in reverse
const anotherString = gameName.slice(-1,2)
// console.log(anotherString);

const newStringOne = "    shubhhzzz      "
console.log(newStringOne);
console.log(newStringOne.trim()); // replaces the whiteline or the newline characters

const url = "https://shubhhzzz.com/subhajit%20baur"
console.log(url.replace('%20', '-'))

// console.log(url.includes('subhajit')) // whether the string includes the term present in ''
// console.log(url.includes('issue'))

console.log(gameName.split('-')) // split function splits the string mentioned on the basis of the thing mentioned in the ''