'Use Strict';

console.log('Hey world hey');


//TODO: GET USERS NAME - PROMPT - alert a greeeting back to the user

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with a yes or no or y/n respone, thank you`);


// TODO: prompt them the 5 yes or no (y/n) questions, alert if they got the answer right or wrong

//Q1

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert('You got it right')
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('Sorry, you got it wrong');
}

//Q2

let questionTwoGuess = prompt('Do I have two boys?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  alert('You got it right')
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('Sorry, you got it wrong');
}

//Q3

let questionThreeGuess = prompt('Do I have any cats?').toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert('You got it right')
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('Sorry, you got it wrong');
}

//Q4

let questionFourGuess = prompt('Do I play the drums?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
  alert('You got it right')
} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('Sorry, you got it wrong');
}

//Q5

let questionFiveGuess = prompt('Do I have a dog?').toLowerCase();

if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('You got it right')
} else if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('Sorry, you got it wrong');
}

//TODO: Give a personlaized message at the end with thier name

//let userName = prompt('What is your name?');

alert(`Thank You ${userName}! It was fun playing five questions with you. Now lets play a guessing game, press ok to continue.`);

//Q6

for (let qSixguess = 0; qSixguess < 4; qSixguess++) {
  let qSixnums = prompt(`Okay ${userName} now guess how many cats I have?`);
  if (parseInt(qSixnums) === 7) {
    alert('Bingo, you got it. I have seven cats!')
    break;
  } else if (parseInt(qSixnums) < 7) {
    alert('Too Low');
  } else if (parseInt(qSixnums) > 7) {
    alert('Too High');
  }
}

//Q7

// let numOfcats = 0;

// While(numOfcats > 6){
//   console.log('How many cats would you like to buy?');
//   numOfcats++;
// }

// let numOfcats

// if (questionSixnum === 'no' || questionSixnum === 'n') {
//   alert('You got it right')
// } else if (questionSixnum === 'yes' || questionSixnum === 'y') {
//   alert('Sorry, you got it wrong');


//TODO: Give a personlaized message at the end with thier name