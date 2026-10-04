//Task 5.1: Write an if block that declares a variable with let inside it. Show (with console.log) that it works inside the block, and confirm it is not accessible outside.

if (true) {
    let insideValue = "Inside block";
    console.log(insideValue);
}
 
console.log(typeof insideValue); // "undefined"

//Task 5.2 — Investigate: Repeat Task 5.1, but declare the variable with var instead of let. What is different about the result outside the block? Explain in 2+ sentences.

if (true) {
    var insideValueVar = "Inside block";
    console.log(insideValueVar);
}
 
console.log(insideValueVar);

