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
    num2 = parseFloat(num2);
    let result;
    switch (operator) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            return 'Invalid Operator';
    }
    return parseFloat(result.toFixed(2));
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

const backspaceButton = document.querySelector('.backspace')
backspaceButton.addEventListener('click' , () => {
    display.textContent = display.textContent.slice(0,-1);
    currentNum = currentNum.slice(0,1);
});


const operationButtons = document.querySelectorAll('.operator');
operationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedOperator = event.target.id;

        if (num1 == null) {
            // Initial operator press
            num1 = currentNum;
            operator = clickedOperator;
            currentNum = '';
            display.textContent = '';
        } else {
            // Handle subsequent operators
            if (currentNum !== '') {
                num2 = currentNum;
                num1 = operate(num1, operator, num2);
                display.textContent = num1;
                currentNum = ''; // Reset for new input
            }
            // Set the new operator
            operator = clickedOperator;
            display.textContent = '';
        }
    });
});


const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    if (num1 !== null && operator !== '' && currentNum !== '') {
        num2 = currentNum;
        num1 = operate(num1, operator, num2);
        display.textContent = num1;
        currentNum = ''; // Reset for new input
        // `operator` is reset here, so it should be ready for the next operation
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