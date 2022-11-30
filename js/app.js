'Use Strict';

console.log('Hey world hey');


//TODO: GET USERS NAME - PROMPT - alert a greteting back to the user


let userName = prompt ('What is your name?');

alert(`welcome to my site ${userName}! Please answer the following questions with a yes or no or y/n`);




// TODO: prompt them the 5 yes or no (y/n) questions, alert if they got the answer right or wrong

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert ('You got it right')
} else if (questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry, you got it wrong');
}




//TODO: Give a personlaized message at the end with thier name