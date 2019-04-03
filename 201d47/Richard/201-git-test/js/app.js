'use strict'
//Confirming that the user wants to play the game
var count = 0 //counts the number of times you get an answer correct
var intro = confirm('Quick get ready want to play guessing game? Only Answer with Y and N');

if(intro){ 
    //Where did i work Question
    var myJob = prompt('Did i work in the navy?').toUpperCase();
    if(myJob === 'Y' || myJob === "YES"){
        alert('Wrong Answer Sorry');
    } else if(myJob === 'N'|| myJob === "NO"){
        alert('Good job you guessed right!');
        count++;
    }else{
        alert('Sorry but you didnt follow my instructions please only answer with\
         Y and N.');
    } console.log(myJob);
    //What is my age question
    var myAge = prompt('Is my age 22').toUpperCase();
    if(myAge === 'Y' || myAge === 'YES'){
        alert('Good job you guessed right!');
        count++;
    } else if(myAge === 'N' || myAge === "NO"){
        alert('Wrong Answer Sorry');
    }else{
            alert('Sorry but you didnt follow my instructions please only answer with\
             Y and N.');
    } console.log(myAge);
    //Do i love tequila question
    var myLoveForTequila = prompt('Do i love tequila?').toUpperCase();
    if(myLoveForTequila === 'Y'|| myLoveForTequila === 'YES'){
        alert("Of course who doesn't love tequila");
        count++;
    }else if(myLoveForTequila === 'N'|| myLoveForTequila === 'NO'){
        alert('Sorry to tell you but I do.');
    }else{
        alert('Sorry but you didnt follow my instructions please only answer with\
        Y and N.');
    } console.log(myLoveForTequila);
    //Allergy question
    var myAllergy = prompt('Am I allergic to anything?').toUpperCase();
    
    if(myAllergy === 'Y' || myAllergy === 'YES'){
        alert('Correct im allergic to mosquitos');
        count++;
    } else if(myAllergy === 'N' || myJob === 'NO'){
        alert('Incorrect im allergic to mosquitos');
    } else{
        alert('Sorry but you didnt follow my instructions please only answer with\
             Y and N.');
    } console.log(myAllergy);
    //Did i go to college question
    var myEducation = prompt('Did i go to college?').toUpperCase();
    if(myEducation === 'Y' || myEducation === 'YES'){
        alert('Correct but i dropped out.');
        count++;
    } else if(myEducation === 'N' || myJob === 'NO'){
        alert('Incorrect I did but i dropped out.');
    } else{
        alert('Sorry but you didnt follow my instructions please only answer with\
             Y and N.');
     } console.log(myAge);
alert('Congrats you got ' + count + ' out of 5 correct Congrats!');}