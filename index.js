let readlineSync = require('readline-sync');

let name = readlineSync.question('whats your name?');//take input

let currentScore = 0;

let quesAnswers = [
  {
    question: "What's my full name? \n a. Chetan Chandel \n b. Pushpananda Prajapati \n c. Chetan Kumar Chandel \n d. Pushpamitra Rajpal \n",
    answer: 'c',
  },
  {
    question: `Where do I live?
 a. Delhi
 b. Jammu
 c. Bangalore
 d. Goa
`,
    answer: 'a',
  },
  {
    question: 'Which school did I study in? \n a. Bal Bharti School \n b. Adarsh World \n c. Rich Harvest Public School \n d. Pragati Public School \n',
    answer: 'd'
  }
]

const highScoreHolders = [
    {
        name: 'Jaadu',
        score: 2
    },
    {
        name: 'Binod',
        score: 1
    }
]

function checkHighScore () {
    highScoreHolders.map(obj => {
        if(currentScore > obj.score) {
            console.log(`You have beaten ${obj.name}'s high score.`);
        }
    })
}

function playQuiz (question, corrAnswer) {
  let answer = readlineSync.question(question);

  if (answer === corrAnswer) {
    console.log('Yes, thats the correct answer.');
    currentScore += 1;
  } else {
    console.log(`Sorry, thats a wrong answer. The correct answer was "${corrAnswer}".`);
  }
  console.log(`Your current score is ${currentScore}`)
  console.log('---------------------------')
}
//actual execution
console.log(`Hey ${name} lets start our 'do you know me?' quiz`);

for (var i = 0; i<quesAnswers.length; i++) {
  playQuiz(quesAnswers[i].question, quesAnswers[i].answer)
}

console.log(`The quiz is over and you have scored ${currentScore} points.`);
checkHighScore();