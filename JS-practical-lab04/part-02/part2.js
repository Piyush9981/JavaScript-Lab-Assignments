
//Task 2.1
// First number
let number = 10;

if (number % 2 === 0) {
    console.log(number + " is an Even number");
} else {
    console.log(number + " is an Odd number");
}
// Second number
number = 7;

if (number % 2 === 0) {
    console.log(number + " is an Even number");
} else {
    console.log(number + " is an Odd number");
}
// Third number
number = 25;
if (number % 2 === 0) {
    console.log(number + " is an Even number");
} else {
    console.log(number + " is an Odd number");
}

//Task 2.2

//Correct Pin
let correctPin = 1234;
let guess = 1234;

if (guess === correctPin) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}
//Wrong pin
let correctPin1 = 1234;
let guess1 = 5678;

if (guess1 === correctPin1) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//Task 2.3
//Old Terniry
let marks = 68;
let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);
//New if-else
let marks1 = 68;

if (marks1 >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}