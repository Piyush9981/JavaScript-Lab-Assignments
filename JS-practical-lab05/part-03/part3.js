//Task 3.1: Write a function calculatePrice(price, tax = 0.18) that returns price + (price * tax). Test it once giving a custom tax rate, and once leaving tax out entirely.

function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}
 
console.log(calculatePrice(1000, 0.10));
console.log(calculatePrice(1000));

//Task 3.2 — Investigate: Call your calculateArea(length, width) function from Part 1 with only ONE argument, e.g. calculateArea(5). What do you get, and why? Write one sentence explaining it.

console.log(calculateArea(5));