console.log(add(5, 2));
console.log(subtract(5, 2));
console.log(multiply(5, 2));
console.log(divide(5, 2));


const numA = 0;
const numB = 0;
const operator = "";


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