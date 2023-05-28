//Variables
let userInput = ""; //This holds all the button presses into a string like a record.
const numA = 0;
const numB = 0;
const operator = "";

//Document references
const display = document.querySelector(".display");
const num1 = document.querySelector(".num1");
const numArray = document.querySelectorAll(".numButton"); //Gets all the numButtons into one array


//Adds event listeners to numButtons that will listen for clicks 
//and execute the press function
console.log(numArray);
for (let i = 0; i < numArray.length; i++) 
{
    numArray[i].addEventListener("click", function(e)
    {
        press(numArray[i]);
    });
}

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
        case "*":
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

function updateDisplay()
{
    display.textContent = userInput;
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

function press(button)
{
    userInput += button.textContent;
    console.log(userInput);
    updateDisplay();
}