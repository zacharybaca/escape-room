// Import The Readline Module From Node
const readLine = require('readline-sync');

/*
Tell the user their options:

1. Find the key, or
2. Put hand in hole
3. Open the door
*/

console.log("Welcome to the Escape Room: Please Enter 1 to Find the key, 2 to Put hand in hole, or 3 to Open the door");

// Assign a Variable to the Question Asking for Option
let selectedChoice = readLine.question("What Would You Like to Do?");
