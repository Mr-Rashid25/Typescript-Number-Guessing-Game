#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold("\n\t>>>>>>>>>>>> Wellcome to Rashid cli-number-guessing-game <<<<<<<<<<<<<\n"));
const RandomNumber = Math.floor(Math.random()*5+1);
const answers  = await inquirer.prompt([
  {
name:"UserGuessNumber",
type: "number",
message:chalk.blueBright.bold("please enter a number between 1-5:")
  },
]);
if(answers.UserGuessNumber===RandomNumber){
console.log(chalk.magentaBright.bold("congratulations! Your Guess Number is correct."))
}else if(answers.UserGuessNumber > 5){
console.log(chalk.bold.red('"Sorry, you entered an incorrect range of numbers greater than 6. '));

}else{
  console.log(chalk.redBright.bold("sorry! The number you guess is incorrect."));
}

