//Task 1.1 — Trace It Yourself: let val = 4 + 3 * 2 ** 2 - 6 / 3; Predict the value by writing out each step (like the guided example above), THEN verify in the console.

    let val = 4 + 3 * 2 ** 2 - 6 / 3;
    /* 
    Prediction:
    steps: 4 + 3 * 4 - 6 / 3 ----> 4 + 12 - 6 / 3 ----> 4 + 12 - 2 ----> 4 + 10 ----> 14
    Output: 14
    */
    console.log(val);

//Task 1.2 — Comparison Chaining Gotcha: Predict, then run, both lines below. The second result surprises most people — explain why in 2–3 sentences, tracing left to right.

    console.log(1 < 2 < 3); // predict first
    //Predicted Output: true
    console.log(3 > 2 > 1); // predict first
    //Predicted Output: true
    // Explaination: JavaScript implicitly converts booleans (true/false) into numbers (1/0) to perform compairision thats why 3 > 2 > 1 become true > 1 become 1 > 1 and that is false.

//Task 1.3: Write ONE expression that combines at least 4 different operators (mixing arithmetic and comparison) and evaluates to true. Show your reasoning, step by step, like the guided example.

    let exp = 10 + 9 * 5 + (5 ** 5) / 5 - 3 >= 10;
    console.log(exp); 
    /*
    step-1: 10 + 9 * 5 + 25 / 5 - 3 ----> 10 + 45 + 25 / 5 - 3 ----> 10 + 45 + 5 - 3 ----> 10 + 45 + 5 - 3 ----> 57
    step-2: 57 >=10 ----> true
    */