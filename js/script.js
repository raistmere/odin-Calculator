//Variables
let userInput = "";
let operandA = "";
let operandB = "";
let operator = "";

//Document references
const display = document.querySelector(".display");
const numArray = document.querySelectorAll(".numButton"); //Gets all the numButtons into one array
const opArray = document.querySelectorAll(".opButton");
const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clearButton");

//Adds event listeners to all buttons that will listen for clicks.
for (let i = 0; i < numArray.length; i++) 
{
    numArray[i].addEventListener("click", function()
    {
        pressNum(numArray[i]);
    });
}

for (let i = 0; i < opArray.length; i++) 
{
    opArray[i].addEventListener("click", function()
    {
        pressOp(opArray[i]);
    });
}

equalsButton.addEventListener("click", function()
{
    pressEquals(equalsButton);
});

clearButton.addEventListener("click", function()
{
    pressClear(clearButton);
});

//This function handles what kind of operation we are doing based on: a and B (both numbers)
//and op - the operator that was chosen.
function operate(a, b, op)
{
    switch (operator) 
    {
        case "+": //We are adding
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "OPERATE ERROR";
            break;
    }
}

//This function handles adding numbers together.
function add(a, b)
{
    return a + b;
}

//This function handles subtracting b parameter from the a paramater.
function subtract(a, b)
{
    return a - b;
}

//This function handles multiplying numbers together.
function multiply(a, b)
{
    return a * b;
}

//This function handles dividing b parameter from the a paramater.
function divide(a, b)
{
    return a / b;
}

//This function handles what happens when a button is pressed.
//The currentState of the calculator will decide on what happens.
function pressNum(button)
{
    userInput += button.textContent;
    display.textContent = userInput;
}

//This function handles what happens when the user presses a operator button
function pressOp(button)
{
    //This checks to see if an operator already exists. If so, then we go ahead and 
    //calculate the current operator and 2 operands, then we go ahead and replace 
    //operator with the new chosen one. If user keeps doing this, only the operandB will be the new userInput.
    if(operator)
    {
        console.log("Operator already exists");

        //Check to see if the user is pressing the operator button back to back.
        //We check userInput, if it doesn't exist, then that means the user wants to switch operator.
        if(userInput === "")
        {
            operator = button.textContent;
        }
        else
        {

            operandB = userInput; //We assign the current userInput to operandB to complete the first calculation.

            //Check to see if the operandB is 0 and if the user is dividing.
            if(operandB === "0" && operator === "/")
            {
                display.textContent = "Can't Divide By Zero";
                return null;
            }

            //Calculate first operator & keep decimal places to 2 max.
            //We go ahead and calculate the current operator and assign the display and the operandA to the new number
            let num = operate(parseInt(operandA), parseInt(operandB), operator);
            if(Number.isInteger(num))
            {
                display.textContent = operandA = " " + num;
            }
            else
            {
                display.textContent = operandA = "" + parseFloat(num).toFixed(2);
            }
            

            //After first operator calculation, assign the new chosen operator with the 
            //calculated number as the new operandA
            operator = button.textContent; //Assign the new operator
            userInput = ""; //Clear the user input so they can decide the next operandB
            operandB = ""; //Clear operandB so we can get the next userInput.
        }
    }
    else //If operator does not exist already, then we go ahead and assign the operator.
    {
        console.log("Assigning operator");
        operator = button.textContent;
        operandA = display.textContent;
        userInput = ""; //Reset the userInput to find the next operand.
    }
}

//This function handles what happens when we press the equals button.
function pressEquals(button)
{
    //If there is no operator chosen yet, then the equals button does not do anything.
    if(operator === "") { return null;}

    console.log("Equals Button Pressed");

    operandB = userInput //We assign the current userInput to operandB to complete the first calculation.


    //We go ahead and calculate the current operator and assign the display and the operandA to the new number
    let num = operate(parseInt(operandA), parseInt(operandB), operator);
    if(Number.isInteger(num))
    {
        display.textContent = operandA = " " + num;
    }
    else
    {
        display.textContent = operandA = "" + parseFloat(num).toFixed(2);
    }

    operator = ""; //We empty the operator variable so we can assign a new one.
    operandB = ""; //We empty operandB so the user can select the next number to calculate with operandA.
    userInput = ""; //We empty userInput to prepare for the next operand the user wants.
}

//This function handles what happens when we press the clear button.
function pressClear(button)
{
    console.log("Clear Button Pressed");
    //Set all variables to empty string to clear the calculator.
    userInput = operandA = operandB = operator = "";
    display.textContent = "0";
}

