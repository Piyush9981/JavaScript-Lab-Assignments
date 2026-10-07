// Task 2.1: Run this. What error appears? Write the exact message.
sayHi();
var sayHi = function () {
    console.log("Hi!");
};

    // Expected error
    // TypeError: sayHi is not a function

// Task 2.2: Change var to const in Task 2.1. Does the error type change? Write both error types side by side.
sayHi();
const sayHi = function () {
    console.log("Hi!");
};


    // var  → TypeError: sayHi is not a function
    // const → ReferenceError: Cannot access 'sayHi' before initialization

// Task 2.4 — Two Functions, Same Name: Predict, then run:
console.log(fnA());
function fnA() { return "First"; }
function fnA() { return "Second"; }

// Fun Task 2.5 — "Top-Down Story": Write a small program in which the main story lines are at the TOP of the file and the helper functions are at the BOTTOM.
wakeUp();
eatBreakfast();
goToCollege();
 
function wakeUp() {
    console.log("Wake up!");
}
 
function eatBreakfast() {
    console.log("Eat breakfast!");
}
 
function goToCollege() {
    console.log("Go to college!");
}
