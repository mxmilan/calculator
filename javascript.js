const add = (a , b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a , b) => a * b;
const divide = (a , b)  => a / b;
let num1 = null;   
let operator = '';
let num2 = null;
currentNum = '';
let equal = '=';

const operate = (num1 , operator , num2) => { 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2)
    switch (operator) {
        case 'add':
            return add(num1, num2); 
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return 'Invalid Operator';
    }
};

const display = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digit')
digitButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const digit = event.target.id; 
        display.textContent += digit;
        currentNum += digit;
    });
});


const operationButtons = document.querySelectorAll('.operator')
operationButtons.forEach(button => {
    button.addEventListener('click' , (event) => {
        const clickedOperator = event.target.id;
        if (num1 == null) {
            num1 = currentNum;
            operator = clickedOperator;
            currentNum = '';
            display.textContent = '';
        } else {
            num2 = currentNum;
            num1 = operate(num1, operator, num2);
            operator = clickedOperator;
            currentNum = '';
            display.textContent = num1;
        }
    });
});


const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click' , () => {
    if (num1 !== null && operator !== '' && currentNum !== '') {
    num2 = currentNum;
    currentNum = '';
    num1 = operate(num1, operator, num2);
    display.textContent = num1;
    }
});

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click' , () => {
    currentNum = '';
    display.textContent = '';
    num1 = null;
    num2 = null;
    operator = '';
});