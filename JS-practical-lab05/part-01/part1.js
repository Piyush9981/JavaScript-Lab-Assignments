//Task 1.1: Write a function declaration isAdult(age) that returns true if age >= 18, otherwise false. Test it with 3 different ages.

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(12));
console.log(isAdult(17));
console.log(isAdult(21));

//Task 1.2 (Fun Task) — "Member Discount": Write a function declaration calculateDiscount(price, isMember) that returns price * 0.9 if isMember is true, otherwise returns price unchanged. Test it once as a member and once as a non-member.

function calculateDiscount(price, isMember) {
    if (isMember) {
        return price * 0.9;
    } else {
        return price;
    }
}

console.log(calculateDiscount(1000, true));
console.log(calculateDiscount(1000, false));

