let score = undefined
// Many a times, while working in the backend we do not know whether the value we received from the request to the frontend(in the form of a form) is of which datatype like 
// For example in the backend, We will get directly 33 but we would not be aware of it's datatype whether it's "33"(string datatype) or 33(number dataType)
// On the other hand, in the frontend we will definitely know the datatype as we ourselves are defining and declaring datatype of the variable

// Two Ways to know the type of a variable we are working on
// console.log(typeof score);          // One being by writing the varible simply in adjacent to the typeof Operator
// console.log(typeof(score));         // and the other being by writing the variable as a method

// Now Suppose we receive the value in string form but we are 100% sure that we need to work with it in number form, then we use this
let valueInNumber = Number(score)      // Something like a defined class but we need to remember that First letter is Capital in most dataTypes
// console.log(typeof valueInNumber);

// For example if we have score = "33abc" which is neither number completely nor a string completely, Hence on conversion we would not be able to convert the string into number completely
// But that is not the case, JS converts(forcefully) string into number and returns the data type as number in this case but when we print this variable(valueInNumber) which is forcefully converted we
// we receive Nan which means Not a Number denoting the variable was not completely a number
// console.log(valueInNumber);

// Now Suppose we receive null in the form as let score = null
// Then what should happen on printing the variable valueInNumber??
// We will get 0 on the console
// We can use this to compare/check whether the temperature is Zero 

// In case of let score = "undefined" also we receive "NaN" on printing the variable in console


// All in all when we are not able to convert the datatype fully into the specified datatype, we get "Nan" or "0" in the console


// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// let isloggedIn = 1

// let booleanIsloggedIn = Boolean(isloggedIn)
// console.log(booleanIsloggedIn)
//          We get "true" on the console

// let isLoggedIn = ""                 //          We get "false" on the console
let isLoggedIn = "Subhajit"            //          We get "true" on the console

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "hitesh" => true
// "" => false

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)       // Although the output on the console may seem as an integer(33) but behind the scenes the datatype has been changed
// console.log(typeof stringNumber);       // Console Prints "string"


// **************************************** Operations *********************************************************

let value = 3
let negValue = -value
// console.log(negValue);          // prints negative of the value on the console i.e., -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)   // 2 raised to the power of 3
// console.log(2%2)
// console.log(2/2)

let str1 = "Hello"
let str2 = " Subhajit!!"

let str3 = str1 + str2      // Contents of str1 and str2 are added(can't be subtracted as such) and stored into str3
// console.log(str3);

// console.log("1" + 2)        // 12 ; If String first then whole thing inside the bracket is converted into string
// console.log(1 + "2")        // 12 ; If String last then whole thing inside the bracket till we receive anything in string datatype, that operation is performed and then converted into string to later be added with the string
// console.log("1" + "2")        // 12
// console.log("1" + 2 + 2)        // 122
// console.log(1 + 2 + "2")        // 32 ; If String last then whole thing inside the bracket till we receive anything in string datatype, that operation is performed and then converted into string to later be added with the string
// Although the above two lines of code may seem confusing due to their varying outputs because of the "" but in Major companies such lines of code would not be accepted because they don't really provide any clarity and is quite confusing while it could have been handled in a better way

// console.log( (3 + 4) * 5 / 6)       // Like by using brackets to avoid confusion on which part to be executed first

// console.log(true)
// console.log(+true)  // Type Conversion because of the use of Increment Operator, true(boolean of 1) is first converted to 1 and then printed on the console
// console.log(+"")  // Type Conversion because of the use of Increment Operator, ""(boolean of 0) is first converted to 0 and then printed on the console

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2          // Not Recommendable due to low readability

let counter = 100
++counter
console.log(counter);

