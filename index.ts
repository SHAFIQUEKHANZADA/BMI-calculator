#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let weight = await inquirer.prompt([{
    name: "kg",
    type: "number",
    message: "Enter your weight in kg's"
}])
let heigth = await inquirer.prompt([{
    name: "ft",
    type: "number",
    message: "Enter your height in ft"
}])
const imc = (weight.kg / (heigth.ft * heigth.ft))
console.log(chalk.underline("Your BMI is:"), 
chalk.bold.bgBlueBright(`${imc}`));
