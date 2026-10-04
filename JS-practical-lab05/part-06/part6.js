//Task 6.1: Write your own nested function (a function declared inside another function), where the inner function reads a variable declared in the outer function.

function outerFunction() {
    let message = "Hello from outer function";
 
    function innerFunction() {
        console.log(message);
    }
 
    innerFunction();
}
 
outerFunction();

//Task 6.2 (Fun Task) — "Secret Admin Mode": Create a global variable role = "guest". Write a function loginAsAdmin() that declares a LOCAL role = "admin" and prints it. After calling the function, print the global role again to prove it never changed.

let role = "guest";
 
function loginAsAdmin() {
    let role = "admin";
    console.log(role);
}
 
loginAsAdmin();
console.log(role);

