/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
    name: "ANDRES",
    friends: 100,
    messages: ["Hello", "World"],
    postMessage: function post(message){
        return facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index){
        return facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend() {
        return facebookProfile.friends++;
    },
    removeFriend: function removeFriend() {
        return facebookProfile.friends--;
    }
}
facebookProfile.postMessage("Puto");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.removeFriend());
