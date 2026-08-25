//Mini Project (ATM MACHINE)
let correctPin = 1234;
let enteredPin = 1234;
let balance = 5000;

// 1 = Check Balance
// 2 = Withdraw
// 3 = Deposit
let choice = 3;

if (enteredPin === correctPin) {

    console.log("Access Granted");

    switch (choice) {

        case 1:
            console.log("Current Balance:", balance);
            break;

        case 2:
            let withdrawAmount = 2000;

            if (withdrawAmount > balance) {
                console.log("Insufficient funds.");
            } else {
                balance = balance - withdrawAmount;
                console.log("Withdrawal successful.");
                console.log("New Balance:", balance);
            }
            break;

        case 3:
            let depositAmount = 2000;

            balance = balance + depositAmount;

            console.log("Deposit successful.");
            console.log("New Balance:", balance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {
    console.log("Wrong PIN. Access Denied.");
}