//Part 7 — Mini Project: Student Grade & Fee Manager

let totalFeeCollected = 0;
 
function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 60) return "C";
    else return "F";
}
 
const calculateLateFee = function(daysLate = 0) {
    return daysLate * 10;
};
 
const processStudent = (name, marks, daysLate = 0) => {
    const grade = calculateGrade(marks);
    const fee = calculateLateFee(daysLate);
    totalFeeCollected += fee;
    console.log(name + " - Grade " + grade + ", Late Fee Rs." + fee);
};
 
processStudent("Aditi", 92);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);
 
console.log("Final Total Fee:", totalFeeCollected);
