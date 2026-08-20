//Task 3.1: Given an array of 5 exam scores of your choice, manually compute the sum and average using indexing. Then use a ternary to classify the average as "Pass" (>= 40) or "Fail".
    let examScore = [80,100,95,85,99];
    let marksSum = examScore[0] + examScore[1] + examScore[2] + examScore[3] + examScore[4];
    let avg = marksSum/(examScore.length);

    console.log("Sum of Marks is: ", marksSum, "and Aveerage is: ", avg);

//Task 3.2: Add a 4th product object of your choice, calculate its subtotal, and recompute the grand total by including it.
    const item1 = { name: "Notebook", price: 60, qty: 3 };
    const item2 = { name: "Pen", price: 10, qty: 5 };
    const item3 = { name: "Bag", price: 800, qty: 1 };
    const item4 = { name: "Laptop", price: 70000, qty: 1}; // 4th added object
    const subtotal1 = item1.price * item1.qty; 
    const subtotal2 = item2.price * item2.qty; 
    const subtotal3 = item3.price * item3.qty; 
    const subTotal4 = item4.price * item4.qty; 
    const grandTotal = subtotal1 + subtotal2 + subtotal3 + subTotal4;
    console.log(grandTotal);

