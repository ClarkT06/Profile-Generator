const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = '';

function addMember (){
   const questions = [
{
    type:"input",
    name:"manager",
    messaage: "What is th emanager's Name?"
}



   ]
     inquirer.prompt(questions).then(response => {


     })

}
addMember()