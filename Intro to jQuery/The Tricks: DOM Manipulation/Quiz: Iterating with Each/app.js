/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
function numberAdder () {
    var text, number;
    text = $(this).text(); /*This will retrieve the content of all the p elements.*/
    number = text.length;  /*This is going to retrieve the lenght of the content of each p elment */
    $(this).text(text + " " + number);
}


$( "p" ).each(numberAdder);
