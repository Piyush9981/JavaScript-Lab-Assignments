//Task 4.1: Create a global variable taxRate = 0.18. Write a function finalPrice(amount) that uses the global taxRate (not a parameter) to return amount + (amount * taxRate).

let taxRate = 0.18;
 
function finalPrice(amount) {
    return amount + (amount * taxRate);
}
 
console.log(finalPrice(1000));

//Task 4.2 — Investigate: Inside a function, declare a local variable with the exact SAME NAME as a global variable you created. Print the value inside the function, then print the global one again afterward. Write 2 lines explaining what you observe — did the global change?

let taxRate1 = 0.18;
 
function showLocalTax() {
    let taxRate1 = 0.05;
    console.log(taxRate1);
}
 
showLocalTax();
console.log(taxRate1);

