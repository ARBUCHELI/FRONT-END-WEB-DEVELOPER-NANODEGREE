Directions:
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression
instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"

Your Code:

/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function laugh(n){
    var risa = "";
    for (let i=0; i<n; i++){
        risa+= "ha";
    }
    return risa+"!";
})
