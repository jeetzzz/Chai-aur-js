// Lecture - 09

// In various Books, we may find 3 or 5 different categories of dataTypes but according to the Official Documentation of Js, all the dataTypes
// have been classified into 2 types as Primitive and Non - Primitive DataTypes
// The categorisation into 2 categories are based on -> How the data has been stored into the memory and how we are accessing that Data

// Primitive - Call by Value that is the original data or reference from the memory is not given directly but a copy of that data or it's reference is given separately 
// and any changes you make is not reflected into the original one but instead in the copied data only  

// 7 Types : String, Number, Boolean, null, undefined(variable declared; memory space declared; but value not yet known or decided), Symbol(Used to make any value Unique), BigInt(although almost all numbers are covered in numbers but some scientific values and exponentially large numbers are left behind in numbers, which have been covered using BigInt DataType)


// Js - a dynamically typed Language or a statically typed Language?
// In some languages we need to specify the Type of the variable, obviously it improves the safety but it is not necessary in Js
// const score = false     // like we do not need to tell beforeHand that score will have only boolean value or only number value

const score = 100
const scoreValue = 100.3    // There are no float or double concept in Js, anything involving numbers are included in number dataType

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // False; although both id and anotherId have values '123' same but still they are exactly not equal due to the use of Symbol dataType which makes the both the variables unique

// const bigNumber = 957540840598549805089n // For BigInt dataType include "n" at the end of the number

// Reference(or Non Primitive) - Values whose reference from the memory can be directly allocated to us

// Array, Objects, Functions

const heroes = ["Shaktiman", "Nagraj", "Doga"];         // Array

// Objects - Using Curly brac's and writing in key - value pair
let myObj = {
    name: "Subhajit",
    age: 20,
}
// basically all the values inside the curly brac's are objects and the dataType can be anything like string, number, array or even an object
// can also store the value inside an object into a variable as "myObj"

// Functions - when treated as a variable

// function(){}         // definition of a function

const myFunction = function(){      // storing the definiton of a function into a variable
    console.log("Hey there!!")
}                                   

// console.log(typeof bigNumber);      // bigint
// console.log(typeof outsideTemp);    // **** object  => whenever null is assigned to a variable, the datatype of that variable is by default object
// console.log(typeof myFunction);         // returns "function" but is known as Function Object or Object Function
// console.log(typeof myObj);             // object
// console.log(typeof anotherId);         // symbol
console.log(typeof heroes);
