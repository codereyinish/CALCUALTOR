
function Add(a, b)
{
      return  a + b;
}
function Subtract(a, b)
{
    return a - b;
}

function Multiply(a, b)
{
    return a * b;
}

function Divide(a, b)
{
    return a / b
}

function Operate(a, b , operator)
{
    switch (operator){

        case "+":
            Add(a, b);
            break;
        case "-":
            Subtract(a, b);
            break;
        case "*":
            Multiply(a, b);
            break;
        case "/":
            Divide(a, b);
            break;
        default:
            "Enter correct pattern"
        
    }
}