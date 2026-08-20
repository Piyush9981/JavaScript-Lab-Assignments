//Que1. Check marks are 40 or above and print pass or fail message only using if function

console.log("===== Que 1. =====");
let marks = 40;

if (marks >= 40){
    console.log("Pass");
}

//Que2. Check vote eligibilty using if func. if age >= 18, eligible else not
console.log("===== Que 2. =====");
let age1 = 19;

if (age1 >= 18){
    console.log("You are Eligible For Vote");
}

//Que3. using if-else check even, odd numbers
console.log("===== Que 3. ======");
let num = 15;

if (num%2 == 0){
    console.log(num, " Is Even Number");
}
else{
    console.log(num, " Is Odd Number");
}

//Que4. Store correct pin and guessed pin in variables and check if correct pin == guessed pin "Access Granted" else "Access Denied"

console.log("===== Que 4. =====");
let pin = 8089;
let guess = 7979;

if (pin == guess){
    console.log("Access Granted");
}
else{
    console.log("Access Denied! Guess again");
}

//Que5. Set the Ticket price if age < 5 Free, if age < 12, $100 , if age < 60 $ 250 else $ 150 

console.log("===== Que 5. ======");
let age = 8;
let price;

if (age < 5){
    price = "Free";
}
else if(age < 12){
    price = "$100";
}
else if(age < 60){
    price = "$250";
}
else{
    price = "$150";
}

console.log("Ticket Price for you is: ",price);

//Que6. Print all days of a week according to the number from 1-7 using Switch case

console.log("===== Que 6. =====");
let day = 4;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There is No 8th day in a week");
}

//Que7. Name a var "Mood" with one of value "Happy" "Sad" "Angree" Tired and print a message according to mood using switch case

console.log("===== Que 7. =====");
let mood = "sad";

switch (mood){
    case "happy":
        console.log("Always Be Happy");
        break;
    case "sad":
        console.log("Try To Be Happy");
        break;
    case "angree":
        console.log("What else you can do");
        break;
    case "tired":
        console.log("Take a Nap!");
        break;
    default:
        console.log("Try to Make your Mood Happy");
}