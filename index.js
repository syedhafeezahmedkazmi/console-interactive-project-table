import inquirer from "inquirer";
// user input
let userInput = await inquirer.prompt({
    name: "num1",
    message: "please enter your number",
    type: "number",
    validate: (input) => {
        const num2 = parseInt(input);
        if (isNaN(num2)) {
            return "please enter the numeric number";
        }
        else {
            return true;
        }
    }
});
// user input value
let usernum = userInput.num1;
// console.log(userInput.num1)
// logice for table
for (let i = 1; i <= 12; i++) {
    let result = usernum * i;
    console.log(` ${usernum} x ${i} = ${result}`);
}
