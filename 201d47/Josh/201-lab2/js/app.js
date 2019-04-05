'use strict';
//Yosh - I want to use the new set of rules

// var startGame = confirm("Hey Gurl, wanna know more about me?");
// console.log("startGame:", startGame);
// if(startGame === true){
//     alert("Yeah Baby");
//     }else{
//     alert("Ah man... Lame! Eh, lets continue anyway!! Please?");
//     }

// var tattooGuessStarWarsAnswer = prompt("Do I have a bunch of Star Wars Tattoos?").toLowerCase();
// console.log("tattooGuessStarWarsAnswer:", tattooGuessStarWarsAnswer);
// //---------------------------------------------------------
// //TATTOO QUSTION
// //---------------------------------------------------------
// if(tattooGuessStarWarsAnswer === "y" || tattooGuessStarWarsAnswer === "yes"){
//     alert("Yes Indeedy!");
//     }else if(tattooGuessStarWarsAnswer === "n" || tattooGuessStarWarsAnswer === "no" ){
//     alert("Na, man, na.");
//     }else{
//     alert("Wah, Wah, Wahhhhhhhhh....");
//     }

// var doILikeNattoAnswer = prompt("Natto: Fermented snotty soy beans... Do I like them?").toLowerCase();
// //---------------------------------------------------------
// //NATTO QUSTION
// //---------------------------------------------------------
// console.log("doILikeNattoAnswer:", doILikeNattoAnswer);
// if(doILikeNattoAnswer === "y" || doILikeNattoAnswer ==="yes"){
//     alert("I LOVE NATTO! Especially with rice and a raw egg");
//     }else if(doILikeNattoAnswer === "n" || doILikeNattoAnswer === "no"){
//     alert("Ummmmm. That is not the right answer.");
//     }else{
//     alert("Buddy... Yes or No Only.");
//     }

// var whereILiveAnswer = prompt("Am i still living in the Stone Age? Y or N Please.").toLowerCase();
// console.log("whereILiveAnswer:", whereILiveAnswer);
// //---------------------------------------------------------
// //WHERE DO I LIVE QUSTION
// //---------------------------------------------------------
// if(whereILiveAnswer === "y" || whereILiveAnswer === "yes"){
//     alert("How Rude!");
//     }else if(whereILiveAnswer === "n" || whereILiveAnswer === "n"){
//     alert("Thats CORRECT! Im a Rock-n-Roller!");
//     }else{
//     alert("I SAID YeS OR NoooO!");
//     }

// var canICodeAnswer =prompt("So... Do you Think I can code?").toLowerCase();
// console.log("canICodeAnswer:", canICodeAnswer);
// //---------------------------------------------------------
// //CAN I CODE QUESTION
// //---------------------------------------------------------
// if(canICodeAnswer === "y" || canICodeAnswer === "yes") {
//     alert("Heeeeeelllzzz No");
//     }else if(canICodeAnswer === "n" || canICodeAnswer ===  "no"){
//     alert("You Chose... Wisely...");
//     }else{
//     alert("Your Face has Melted. Press Restart");
//     }

// var amIOtakuAnswer = prompt("Whatcha think? Am I an Otaku?").toLowerCase();
// console.log("amIOtakuAnswer:", amIOtakuAnswer);
// //---------------------------------------------------------
// //OTAKU QUSTION
// //---------------------------------------------------------
// if(amIOtakuAnswer === "y" || amIOtakuAnswer === "yes") {
//     alert("You bet your ass I am. Im reading Manga RN!!");
//     }else if(amIOtakuAnswer === "n" || amIOtakuAnswer === "no"){
//     alert("What is wrong with you. Its Obvious dude.");
//     }else{
//     alert("We've been doing this for a bunch of questions. How havn't you figured it out?");
// }



//what we worked on
var guessesRemaining = 5;
while(guessesRemaining > 0 && numberOfGames !== 101){
  var numberOfGames = Number(prompt('Guess how many games Ive been featured in! Hint: It\'s an amount of spotted dogs.'));
    guessesRemaining--;
}

if(guessesRemaining === 101){
  alert('YA, YA, YA, YA, YA!!');
}else if{
}



// needs to be reworked still
while(guessesRemaining > 0 && numberOfGames !== 101){
  guessesRemaining--;
  alert('*sad tuba sound*');
  numberOfGames = Number(prompt('Oh No! You Only have ' + guessesRemaining + ' untill you lose!'));
}if(guessesRemaining > 0 && numberOfGames === 101){
  alert('YA, YA, YA, YA, YA!!');
}