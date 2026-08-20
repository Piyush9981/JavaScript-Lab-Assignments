//Simple Grade Calculator

let hindi = 80;
let english = 90;
let python = 95;

let totalMarks = hindi + english + python;
let avg = (hindi + english + python)/3;

let grade = avg >= 90 ? "A" : avg >= 75 ? "B" : avg >= 40 ? "C" : "F"

console.log("Data Type of avg: ", typeof avg);
console.log("Total :", totalMarks, "Average :", avg, "Grade :", grade);

let attendance = 80;
const isEligibleForScholarship = avg >= 85 && attendance >= 75 ? true : false;
console.log("isEligibleForScholarship: ", isEligibleForScholarship);


