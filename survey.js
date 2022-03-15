const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name or nickname? ",
  "What is an activity you like doing? ",
  "What music do you listen do while doing that activity? ",
  "What is your favorite meal? ",
  "What is your superpower? ",
  "Why you over someone else? ",
];

// Nest all of these questions, thanks Thamilhan from StackOverflow
// https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js
rl.question(questions[0], (answer1) => {
  rl.question(questions[1], (answer2) => {
    rl.question(questions[2], (answer3) => {
      rl.question(questions[3], (answer4) => {
        rl.question(questions[4], (answer5) => {
          rl.question(questions[5], (answer6) => {
            console.log(
              `Name: ${answer1}
              One of my favorite activities is: ${answer2}
              While ${answer2}, I listen to ${answer3}
              I love to eat ${answer4} and my superpower is ${answer5}!
              What makes me great is ${answer6}.`
            );
            rl.close();
          });
        });
      });
    });
  });
});
