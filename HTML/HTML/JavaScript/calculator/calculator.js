function Add(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let Result = Number(number1) + Number(number2);
    document.getElementById('Result').innerHTML = Result
}
function Sub(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let Result = number1 - number2;
    document.getElementById('Result').innerHTML = Result
}
function Mul(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let Result = number1 * number2;
    document.getElementById('Result').innerHTML = Result
}
function Divi(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let Result = number1 / number2;
    document.getElementById('Result').innerHTML = Result
}