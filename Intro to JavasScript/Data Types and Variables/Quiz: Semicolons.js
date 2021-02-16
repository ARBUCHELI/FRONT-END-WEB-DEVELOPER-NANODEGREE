/*One thing to take notice of in all the examples you've seen so far is the use of semicolons ; at the end of each line. Semicolons make it clear where one statement
ends and another begins. This is especially handy when multiple lines of code are written on the same line (which is valid JavaScript, but definitely not recommended!).
For instance:

var totalAfterTax = 53.03 var tip = 8 // this is incorrect!
Uncaught SyntaxError: Unexpected token var

vs.

var totalAfterTax = 53.03; var tip = 8; // this is correct!

Not adding semicolons to the end of each line can cause bugs and errors in your programs. JavaScript does have ways to occasionally predict where semicolons should be, but just 
like how type coercion can result in some unexpected quirky behavior in JavaScript, it's good practice to not depend on it.

Directions for the Quiz Below:
Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

red blue
where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

Your Code:*/

/*
 * Programming Quiz: Semicolons! (2-8)
 */

// your code goes here
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne+" "+thingTwo);

