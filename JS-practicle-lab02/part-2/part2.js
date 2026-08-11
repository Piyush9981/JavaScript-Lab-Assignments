let studentName = "Piyush";
let studentAge = 20;
const collegeName = "Dev Sanskriti Vishwavidyalaya";

// Task 2.1
    let name = "Piyush";
    let rollNum = 2424159;
    let course = "B.SC (IT)";

    console.log("My name is: ", name, "Roll Number is: ", rollNum, "and Course is: ",course);

// Task 2.2
    // collegeName = "IIT Delhi";
    
    //Error Message: Uncaught TypeError: Assignment to constant variable.

// Task 2.3

    /* 
    let 1stYear;  
    Invalid
    Why? : Becouse the First latter in "1stYear" is a Number
    */  

    /* 
    let student_name;  
    Valid
    Why? : Becouse its correct according to JavaScript variable creation rule
    */  

    /* 
    let let;  
    Invalid
    Why? : Becouse let is a lexically bound name (JavaScript Keywords can't be a variable name)
    */

    /* 
    let $marks;  
    Valid
    Why? :  Becouse its correct according to JavaScript variable creation rule
    */  

    /* 
    let roll no;  
    invalid
    Why? :  Becouse space is not allowed in variable name
    */  

// Task 2.4
    if (true){
        var a = "I am a var";
        let b = "I am a let";
    }
    console.log(a);
    console.log(b);

    /* console.log(b) throws an error and console.log(a) not becaouse b is a let type variable which 
     only has scope in its block and we try to use it out from its block (if block). it's only define in if
     block where it declared and outside if block it's undefine that's why it throws "part2.js:55 Uncaught 
     ReferenceError: b is not defined" Error */ 