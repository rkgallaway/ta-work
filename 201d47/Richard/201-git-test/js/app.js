'use strict'
//Confirming that the user wants to play the game
var intro = confirm('Quick get ready want to play guessing game? Only Answer with Y and N');
var count = 0 //counts the number of times you get an answer correct
if(intro){
    //Where did i work Question
    var myJob = prompt('Did i work in the navy?');
    myJob === myJob.toUpperCase;
    console.log('Did i work in the navy?');
    if(myJob === 'Y'){
        alert('Wrong Answer Sorry');
    } else if(myJob === 'N'){
        alert('Good job you guessed right!');
        count++;
    }else{
        alert('Sorry but you didnt follow my instructions please only answer with\
         Y and N.');
    }
    //What is my age question
    var myAge = prompt('Is my age 22');
    myAge === myAge.toUpperCase;
    console.log('Is my age 22');
    if(myAge === 'Y'){
        alert('Good job you guessed right!');
        count++;
    } else if(myAge === 'N'){
        alert('Wrong Answer Sorry');
    }else{
            alert('Sorry but you didnt follow my instructions please only answer with\
             Y and N.');
    }
    //Do i love tequila question
    var myLoveForTequila = prompt('Do i love tequila?');
    myLoveForTequila === myLoveForTequila.toUpperCase;
    console.log('Do i love tequila?');
    if(myLoveForTequila === 'Y'){
        alert("Of course who doesn't love tequila");
        count++;
    }else if(myLoveForTequila === 'N'){
        alert('Sorry to tell you but I do.');
    }else{
        alert('Sorry but you didnt follow my instructions please only answer with\
        Y and N.');
    }
    //Allergy question
    var myAllergy = prompt('Am I allergic to anything?');
    myAllergy === myAllergy.toUpperCase;
    console.log('Am I allergic to anything?');
    if(myAllergy === 'Y'){
        alert('Correct im allergic to mosquitos');
        count++;
    } else if(myAllergy === 'N'){
        alert('Incorrect im allergic to mosquitos');
    } else{
        alert('Sorry but you didnt follow my instructions please only answer with\
             Y and N.');
    }
    //Did i go to college question
    var myEducation = prompt('Did i go to college?');
    myEducation === myEducation.toUpperCase;
    console.log('Did i go to college?');
    if(myEducation === 'Y'){
        alert('Correct but i dropped out.');
        count++;
    } else if(myEducation === 'N'){
        alert('Incorrect I did but i dropped out.');
    } else{
        alert('Sorry but you didnt follow my instructions please only answer with\
             Y and N.');
     }
    
}
alert('Congrats you got ' + count + ' out of 5 correct Congrats!');


    