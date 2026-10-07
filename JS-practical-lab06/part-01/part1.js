// Task 1.1: Predict, then run. Write the output in your record:

console.log(city);
var city = "Haridwar";
console.log(city);
    //Pridection
        // undefined
        // Haridwar


//Task 1.2: What does this print? Think about hoisting inside a function.

function showMessage() {
    console.log(message);
    var message = "Hello";
    console.log(message);
}
 
showMessage();

// Task 1.3 — Shadow Trap: Predict the output. Why is the first line NOT "global"?
var name = "global";
function test() {
    console.log(name);
    var name = "local";
}
 
test();

// Fun Task 1.4 — "Magic Trick": Write a 4-line program that prints undefined first and then your favourite food, using only var and two console.log lines.
console.log(food);
var food = "Pizza";
console.log(food);

