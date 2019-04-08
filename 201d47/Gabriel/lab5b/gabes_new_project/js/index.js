// <!-- Gabriel - Small CSS to stylized the coloring of the headers and background-->
// <!-- Gabriel - Down below is the Javascript for the page that is written  -->
    // <script>
    'use strict'; // Gabriel - Utilizing the use strict rule learned in class

       // Gabriel - Welcome alert and light rules for page
      alert("Welcome to my page.");
      alert("Answer a series of questions to be granted admittance. Good Luck!");

      function questionOne() {
      // Gabriel - Asks to play a numbers guessing game between 1 and 20
      var guessNumbers = prompt("Let's play a guessing game; Think of a number between 1 and 20?").toLowerCase();
      var yourCorrect = parseInt(guessNumbers);
      if(yourCorrect === 13) {
        alert('You are Correct! Great Job, Are you ready for the next question?');
      } else if (yourCorrect < 13); {
        alert('That is Not Correct! Sorry you will need to try again.');
      } if (yourCorrect > 13); {
        alert('I guess it is back to the drawing board for you!');
      }
      }
      // Raven - Question 2 begins. Start new function
      // Gabriel - Below fused together my initial code with the code segment from class
      function questionTwo() {
      var myFavoriteColor = prompt("This next question is a little tricky, what is my favorite color?").toLowerCase();
      var gotItRight = parseInt(myFavoriteColor);

      if(myFavoriteColor === "red") { // Gabriel - Question? Can you add concatenation to the descriptor or "red" like "red + blue + green"
        alert('Yay you got another one Correct! Red is my Favorite Color. How did you know?');
      } else if(gotItRight > "red"); {
        alert('Sorry but your going to have to try again');
      } if (gotItRight !== "red") {
        alert("Please again? Hint... Everything is in lower case!");
      }
      }
      // Raven - Question 3 begins. Added new function.
      // Gabriel - Asked another question, but this one asked how many kids (another guessing game)
      function questionThree() {
      var numberOfKids = prompt("This next question is a little tricky, what is my favorite color?").toLowerCase();
      var reallyAgain = parseInt(numberOfKids);
  
      if(numberOfKids === "3") {
        alert('Good guess, Are you sure your not google-ing me lol. How did you know?');
      } else if(gotItRight === "3"); {
        alert('Sorry but you got it wrong this time!');
      } else {
        alert("Nope, Keep trying!!!");
      }
      // Raven Question 4 begins. New function here.
      // Gabriel - Here is another guessing game with my age as the question that answers a number
      function questionFour() {
      var oldFart = prompt("Ok, I see you. Ok! Last One! How old am I?");
      var noWay = parseInt(oldFart);

        if(oldFart) = prompt("This one is tough! How old am I?").toLowerCase(); {
          alert("Dang, your pretty lucky, Wanna buy a lotto ticket for me?");
        } else if(noWay === 37); {
          alert('...You Shall NOT PASS!!! Try again!'); {
        } else {
          alert('That was your last shot too. Dang! Better luck next time!!!!');
        }
        } 

        questionOne();
        questionTwo();
        questionThree();
        questionFour();

        // Gabriel - Below is a copied (by hand) version of what Vinicio did in class 
// Gabirel - I am adding into my code and will be sure to cite my source :)

// Gabriel - I cannot seem to get this code to work and it is frustrating. I have tried rewritting numerous times
// Gabriel - I have done the 15 minute walk away for a breather and come back nada. What i am missing... I will need to utilize help 
// Gabriel - It is almost 1:56 am 4/4/19 and I am at my wits end. I have tring all night to no avail. I feel defeated....
// Gabriel - I will try again tomorrow.
// var guessesRemaining = 4; 
// var userGuessedCorrectly = false;

// while(guessesRemaining > 0 && userGuessedCorrectly === false) {
//     alert('');
//     guessesRemaining--; 
//     alert('You have ' + guessesRemaining + ' attepmts');
// }
// if(userGuessedCorrectly) {
//     alert('Congratulations');
// }
// else {
//     alert('BOO!');
// }

// Gabriel - The code above covers the last question to the lab

            
      // Gabriel - Here I created the guessing game on accident, and I have just
      // edited the portion that I am not using out quite yet and I plan on saving 
      // it for later or at minimum learning from it
      
      // Commented Out - First Question that asked to guess a number
      // Commented Out - ("Your are absolutely correct! Are you ready for the adventure to start?");
      // Commented Out - console.log("Your number was..." + guessNumbers + "Right on! The number you guessed is..." + yourCorrect);
      // Commented Out - Gabriel - Asks what my favorite color is
      
      // Commented Out - Here I created another promt to ask what my favorite color was
      // Commented Out - var myFavoriteColor = prompt("Do you think you can get this correct? What is my favorite color?");
      // Commented Out - var gotIt = confirm("Pretty lucky guess if you ask me! But none the less you are correct!");  
      // Commented Out - console.log("Your guess for color was..." + myFavoriteColor + "I still say its a lucky guess!" + gotIt);

      // Commented Out - - Asks how many kids that I have.
      // Commented Out - var numberOfKids = prompt("There is no way you can guess this one! How many kids do you think I have?");
      // Commented Out - var reallyAgain = confirm("There is no way you could answer these without some help!");
      // Commented Out - console.log("I can't believe you guess correct again!" + numberOfKids + "No way you can be that lucky!" + reallyAgain);
      
      // Gabriel - Asks my age and returns a prompt
      // Commented Out - var oldFart = prompt("My patience for your lucky guesses are wearing thin! How old do you think I am?");
      // Commented Out - var noWay = confirm("Have you been secretly googling me, I mean how else would you knows this stuff?");
      // Commented Out - console.log("I don't believe it! Your guesstimate was correct again!" + oldFart 
      // Commented Out - + "I still don't believe you guess correctly on your own!" + noWay)

        }