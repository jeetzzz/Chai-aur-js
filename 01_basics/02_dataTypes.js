"use strict"; // treat all JS Code as newer version
// specifies we are using code of newer version of JS

// alert( 3 + 3) // we are using nodejs, not a browser; it works only when executed in a console or browser and shows an alert message

// console.log(3 + 3); console.log("Subhajit") // Code Readability = 0
// console.log(3 + 3) console.log("Subhajit") // Error

console.log(3 + 3)

console.log("Subhajit")

let name = "Subhajit" // string
let age = 18            // number
let isLoggedIn = false  // boolean
// let state;
// Undefined => Declared a variable but value of the variable is not yet defined


// number => 2 to the power of 53
// string => ""(recommended) but also '' used
// bigint 
// boolean => true/false

let state = null
// null => standalone value     // Representation of an empty Value
// Intentionally specifying the value is not undefined but is empty
// Like for example, if we send request to a server for telling us temperature but there is some bug or issue or due to which server is unable to specify us the temperaturem then if we receive 0 from the server then it would mean that we got 0 as the temperature but that's not the case, So we need to get null from the server in order to know that there was some error fetching the temperature

// undefined => Value not yet assigned\

// symbol => unique
// above all were primitive datatypes

// object       


console.log(typeof "Subhajit"); // string

console.log(typeof age);    // number

console.log(typeof null);   // object

console.log(typeof undefined);  // undefined because undefined itself is a type
