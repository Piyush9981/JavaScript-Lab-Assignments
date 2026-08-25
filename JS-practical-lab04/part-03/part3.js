
//Task 3.1
function ticketPrice(age) {
    if (age < 5) {
        console.log("Age:", age, "- Free");
    } else if (age < 12) {
        console.log("Age:", age, "- Rs. 100");
    } else if (age < 60) {
        console.log("Age:", age, "- Rs. 250");
    } else {
        console.log("Age:", age, "- Rs. 150");
    }
}

// Testing with 5 different ages
ticketPrice(3);
ticketPrice(8);
ticketPrice(15);
ticketPrice(45);
ticketPrice(65);

//Task 3.2
function weatherAdvice(temperature) {
    if (temperature > 35) {
        console.log(temperature + "°C: It's hot! Drink water.");
    } else if (temperature > 20) {
        console.log(temperature + "°C: Nice weather!");
    } else if (temperature > 10) {
        console.log(temperature + "°C: A bit cold. Wear a jacket.");
    } else {
        console.log(temperature + "°C: Very cold! Stay warm.");
    }
}

// Testing with 4 temperatures
weatherAdvice(40);
weatherAdvice(25);
weatherAdvice(15);
weatherAdvice(5);