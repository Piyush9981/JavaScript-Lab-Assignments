// Task 4.1: Type the counter. Call counterA 5 times and counterB 2 times. Write the outputs. Why does counterB not continue from counterA?

const counterA = makeCounter();
const counterB = makeCounter();
 
console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());
 
console.log(counterB());
console.log(counterB());

// Task 4.2: Try console.log(count); outside the function. What error? What does this prove about closure variables?
const counter = makeCounter();
console.log(count);

// ReferenceError: count is not defined

// Task 4.3 — Multiplier Factory: Complete and run:
function makeMultiplier(n) {
    return function (x) {
        return x * n;
    };
}
 
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5), triple(5));  // 10 15

// Task 4.4: Write makeGreeter(greeting) so that makeGreeter("Namaste")("Aditi") prints Namaste, Aditi!.
function makeGreeter(greeting) {
    return function (name) {
        return greeting + ", " + name + "!";
    };
}
 
const greet = makeGreeter("Namaste");
console.log(greet("Aditi"));

// Fun Task 4.5 — "Chai Counter": Make makeCupCounter() that returns a function. Each call adds one cup and returns the message "Cup number 3 of chai". Make two counters for two different friends and show they do not mix.
function makeCupCounter() {
    let cups = 0;
    return function () {
        cups++;
        return "Cup number " + cups + " of chai";
    };
}
 
const friendA = makeCupCounter();
const friendB = makeCupCounter();
 
console.log(friendA());
console.log(friendA());
console.log(friendA());
console.log(friendB());
console.log(friendB());

