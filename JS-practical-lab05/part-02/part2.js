//Task 2.1: Rewrite your isAdult function from Task 1.1 as a function expression, stored in a const.

const isAdultExpression = function(age) {
    return age >= 18;
};
 
console.log(isAdultExpression(20));

//Task 2.2 (Fun Task) — "Quick Square": Write an arrow function square(n) that returns n * n, using the shortest arrow form (no braces, no return keyword). Test it with 3 numbers.

const square = n => n * n;
 
console.log(square(2));
console.log(square(5));
console.log(square(10));

//Task 2.3: Write an arrow function fullName(first, last) that returns the two names joined with a space. Test it with your own name.

const fullName = (first, last) => first + " " + last;
 
console.log(fullName("Piyush", "Hanswal"));
