// <!-- Gabriel - Small CSS to stylized the coloring of the headers and background-->
// <!-- Gabriel - Down below is the Javascript for the page that is written  -->
    // <script>
    'use strict'; // Gabriel - Utilizing the use strict rule learned in class

       // Gabriel - Welcome alert and light rules for page
      alert("Welcome to my page.")
      alert("Answer a series of questions to be granted admittance. Good Luck!");

      // Gabriel - Asks to play a numbers guessing game between 1 and 10
      var guessNumbers = prompt("Let's play a guessing game; Think of a number between 1 and 10?");
      var yourCorrect = parseInt(guessNumbers);
      if(yourCorrect === 7) {
        alert('You are Correct! Great Job, Are you ready for the next question?');
      } else {
        alert('That is Not Correct! Sorry you will need to try again.');
      }
      // Gabriel - Below fused together my initial code with the code segment from class
      var myFavoriteColor = prompt("This next question is a little tricky, what is my favorite color?")
      var gotItRight = parseInt(myFavoriteColor);

      if(myFavoriteColor === "red") {
        alert('Yay you got another one Correct! Red is my Favorite Color. How did you know?');
      } else if(gotItRight === "red"); {
        alert('Sorry but your going to have to try again')
      } else {
        alert("Please again? Hint... Everything is in lower case!")
      } 
        
        // Gabriel - Here is another section quoted out and saved for later 
        // else {
        // here I tried adding the else alert with the ok bye 
        // but it didn't make sense to use it.}

        var numberOfKids = prompt("This next question is a little tricky, what is my favorite color?")
        var reallyAgain = parseInt(numberOfKids);
  
        // Gabriel - Again down below, I used the flu segment from class
        
        if(numberOfKids === "3") {
          alert('Good guess, Are you sure your not google-ing me lol. How did you know?');
        } else if(gotItRight === "3"); {
          alert('Sorry but you got it wrong this time!')
        } else {
          alert("Nope, Keep trying!!!")
      
      var oldFart = prompt("Ok, I see you. Ok! Last One! How old am I?")
      var noWay = parseInt(oldFart);


     
      // Gabriel - Here I created the guessing game on accident and I have just
      // edited the portion that I am not using out quite yet
      // ("Your are absolutely correct! Are you ready for the adventure to start?");
      // console.log("Your number was..." + guessNumbers + "Right on! The number you guessed is..." + yourCorrect);
      // Gabriel - Asks what my favorite color is
      
      var myFavoriteColor = prompt("Do you think you can get this correct? What is my favorite color?");
      var gotIt = confirm("Pretty lucky guess if you ask me! But none the less you are correct!");  
      console.log("Your guess for color was..." + myFavoriteColor + "I still say its a lucky guess!" + gotIt);

      // Gabriel - Asks how many kids I have
      var numberOfKids = prompt("There is no way you can guess this one! How many kids do you think I have?");
      var reallyAgain = confirm("There is no way you could answer these without some help!");
      console.log("I can't believe you guess correct again!" + numberOfKids + "No way you can be that lucky!" + reallyAgain);
      
      // Gabriel - Asks my age
      var oldFart = prompt("My patience for your lucky guesses are wearing thin! How old do you think I am?");
      var noWay = confirm("Have you been secretly googling me, I mean how else would you knows this stuff?");
      console.log("I don't believe it! Your guesstimate was correct again!" + oldFart 
      + "I still don't believe you guess correctly on your own!" + noWay)

      // </script>