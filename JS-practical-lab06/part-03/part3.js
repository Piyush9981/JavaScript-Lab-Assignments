// Task 3.1: Run the same for const PI = 3.14; placed after a console.log(PI);. Write the error message.
console.log(PI);
const PI = 3.14;

    //ReferenceError: Cannot access 'PI' before initialization

// Task 3.2 — typeof Surprise: Predict and run both. They are NOT the same!
console.log(typeof x);
var x = 5;
console.log(typeof y);
let y = 5;


    //Prediction
    // undefined
    // ReferenceError


    //Output
    //undefined
    // ReferenceError: Cannot access 'y' before initialization



// Fun Task 3.4 — "Error Detective": Write four mini-programs, each one causing a different result.

// (a) Prints undefined
console.log(a);
var a = 10;

// (b) ReferenceError
console.log(b);
let b = 10;

// (c) TypeError
hello();
var hello = function() { console.log("Hi"); };

// (d) Works because of hoisting
greet();
function greet() { console.log("Hello"); }
