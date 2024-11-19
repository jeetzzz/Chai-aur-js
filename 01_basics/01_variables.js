// Values are declared in js using two keywords as const and let
// const is used when the value we are defining needs no further changes once specified
// let is used when the value we are defining can change in further flow of code
const accountId = 144553
let accountEmail = "subhajit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// There can be a possibility of definition of a new variable directly without using any let or const keyword, but it is not preferred

let accountState;
// if we only declare the variable then the value by default is taken to be undefined

//accountId = 2 //not allowed since we defined the variable type as constant which means the value initially defined as cannot be modified further

accountEmail = "sbsb@gmail.com"
accountPassword = "212121"
accountCity = "Palwal"

console.log(accountId);
// prints only a single value

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
//prints multiple values in tabular form