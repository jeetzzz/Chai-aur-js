let score = undefined
// Many a times, while working in the backend we do not know whether the value we received from the request to the frontend(in the form of a form) is of which datatype like 
// For example in the backend, We will get directly 33 but we would not be aware of it's datatype whether it's "33"(string datatype) or 33(number dataType)
// On the other hand, in the frontend we will definitely know the datatype as we ourselves are defining and declaring datatype of the variable

// Two Ways to know the type of a variable we are working on
console.log(typeof score);          // One being by writing the varible simply in adjacent to the typeof Operator
console.log(typeof(score));         // and the other being by writing the variable as a method

// Now Suppose we receive the value in string form but we are 100% sure that we need to work with it in number form, then we use this
let valueInNumber = Number(score)      // Something like a defined class but we need to remember that First letter is Capital in most dataTypes
console.log(typeof valueInNumber);

// For example if we have score = "33abc" which is neither number completely nor a string completely, Hence on conversion we would not be able to convert the string into number completely
// But that is not the case, JS converts(forcefully) string into number and returns the data type as number in this case but when we print this variable(valueInNumber) which is forcefully converted we
// we receive Nan which means Not a Number denoting the variable was not completely a number
console.log(valueInNumber);

// Now Suppose we receive null in the form as let score = null
// Then what should happen on printing the variable valueInNumber??
// We will get 0 on the console
// We can use this to compare/check whether the temperature is Zero 

// In case of let score = "undefined" also we receive "NaN" on printing the variable in console


// All in all when we are not able to convert the datatype fully into the specified datatype, we get "Nan" or "0" in the console


// "33" => 33
// "33abc" => Nan
// true => 1; false => 0
