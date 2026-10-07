// Task 6.2: Predict first, then run this timer version. It prints after about 1 second:
for (var k = 1; k <= 3; k++) {
    setTimeout(() => console.log("var:", k), 1000);
}
 
for (let m = 1; m <= 3; m++) {
    setTimeout(() => console.log("let:", m), 1000);
}

// Fun Task 6.3 — "Fix the Bug": Change only ONE word in the var loop of Task 6.2 so it prints 1, 2, 3.
for (let k = 1; k <= 3; k++) {
    setTimeout(() => console.log("var:", k), 1000);
}
