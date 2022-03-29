const readline = require("readline");
//receive word
var word = "";
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.question("Enter word to see if it is a palindrome: ", function (word) {
    console.log(`You entered: ${word}`);

//measure lenth of string
     var length = word.length;

//word split variables
    var front = "";
    var back = "";
    var reversedBack = "";

//is even or odd
    if (word.length % 2 == 0) {
        front = word.slice(0, word.length / 2);
        back = word.slice(word.length / 2, length);
    } else {
        front = word.slice(0, word.length / 2);
        back = word.slice(word.length / 2 + 1, length);
    }
    for (let i = back.length - 1; i >= 0; i--) {
        reversedBack = reversedBack.concat(back[i]); 
    }
//compare variables
//console.log result
    if (front.normalize() === reversedBack.normalize()) {
        console.log(`${word} is a palindrome!`);
    } else {
        console.log(`${word} is not a palindrome.`);
    }
    read.close();
});