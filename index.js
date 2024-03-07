// Import The Readline Module From Node
const readLine = require('readline-sync');


// Global Variable That Decides If the Loop Continues, or Ends
let doesGameContinue = true;

// Global Variable That Dictates Whether the User Found the Key or Not
let foundKey = false;

// Generate a Random Number Between 0 and 100 to Use in Place of a Decision if a Room Has a Key or Not
let randomNum = Math.floor(Math.random() * 101);

// Generate Another Random Number Between 0 and 100 to Use As a Matching Number
let matchingNum = Math.floor(Math.random() * 101);

/*
Tell the user their options:

1. Find the key, or
2. Put hand in hole
3. Open the door
*/

/* Use These Variables for Testing the Functionality of Finding a Key */
// When Testing, Comment Out randomNum and matchingNum Above
//let randomNum = 2;
//let matchingNum = 2;

// While doesGameEnd equal False, Keep Asking the User the Intro Question
while (doesGameContinue) {
    console.log(
      "Welcome to the Escape Room: Please Enter 1 to Find the key, 2 to Put hand in hole, or 3 to Open the door"
    );

    // Assign a Variable to the Question Asking for Option
    let selectedChoice = readLine.question("What Would You Like to Do? ");

    // Use Switch Statement to Compare Choices
    switch (selectedChoice) {
        // If User Selects 2, They Automatically Die and The Game Ends
        // Set doesGameContinue to False to End Loop
        case '2':
            console.log("Sorry, you shouldn't have done that! You are now dead, and the game has come to an end.");
            doesGameContinue = false;
            break;
        // If User Selects 3, and Found Key is Still False, Present a Message Telling the User to Select Another Option
        // If Found Key is True, Present a Message Congratulating the User on Escaping the Room, and Set doesGameContinue to False
        case '3':
            if (foundKey === false) {
                console.log("Sorry, you haven't found the key yet, so you cannot open the door. Please choose another option");
            } else {
                console.log("Congratulations on finding the key. You have now unlocked and opened the door. You have successfully escaped the room");
                doesGameContinue = false;
            }
            break;
        // If User Selects 1, Compare the Randomly Generated Numbers to Each Other to See if They Are Equal
        // If They Are Not Equal, The Key Hasn't Been Found, and the Loop Continues
        // If They Are Equal, The Key Has Been Found, and Found Key Should be Set to True, the Loop Still Continues
        case '1':
            // If Found Key is True, Display a Message Stating That They Have Already Found the Key
            if (foundKey) {
                console.log("You have already found the key. You no longer need to continue the search.");
                break;
            }

            if (randomNum === matchingNum) {
                console.log("Congratulations! You have found the key!");
                foundKey = true;
            } else {
                console.log("The key still hasn't been found. Keep searching!!");
            }
            break;
        // If the User Enters Any Other Value Besides the Values Being Checked Against
        // Display a Message Stating That Their Entry Was Invalid, and to Try Again
        default:
            console.log("Sorry, you have entered an incorrect option. Please enter a valid option to continue");
    }
}
