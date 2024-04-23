import inquirer from "inquirer";

const random_number = Math.floor(Math.random() * 3 +1);
// console.log(random_number);
const answers = await inquirer.prompt([
    {
        name: "userGuessNum",
        type: "number",
        message: "please guess a number between (1 - 3) :",
    },
]);
if(answers.userGuessNum === random_number){
    console.log("Congratulations, You Won the game")
}else{
    console.log("You Lost")}