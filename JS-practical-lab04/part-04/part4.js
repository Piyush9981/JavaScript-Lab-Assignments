//Task 4.1
let day = 1;

switch (day) {
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
        console.log("Invalid day number");
}

//Task 4.2
let mood = "happy";

switch (mood) {
    case "happy":
        console.log("You are happy!");
        break;

    case "sad":
        console.log("Don't worry, better days are coming!");
        break;

    case "angry":
        console.log("Take a deep breath and relax.");
        break;

    case "tired":
        console.log("You should get some rest.");
        break;

    default:
        console.log("I don't understand this mood.");
}

//Task 4.3
let day1 = 1;

switch (day1) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}