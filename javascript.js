const add = (a , b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a , b) => a * b;
const divide = (a , b)  => a / b;
let num1 = null;   
let operator = ' ';
let num2 = null;
currentNum = '';

const operate = (num1 , operator , num2) => { 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2)
    if (operator === '+') {
   return add(num1 , num2); 
} else if (operator === '-') {
    return subtract(num1 , num2);
} else if (operator === '*') {
    return multiply(num1 , num2);
} else if (operator === '/') {
    return divide( num1, num2)
} else {o
    return 'Invalid Operator';
}
};

const display = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digit')
digitButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const digit = event.target.id; 
        display.textContent += digit;
       
    });
});

const operationButtons = document.querySelectorAll('.operator')
operationButtons.forEach(button => {
    button.addEventListener('click' , (event) => {
        const operator = event.target.id;
        if (num1 == null) {
            num1 = currentNum;
            this.operator = operator
            currentNum = '';
        } else {
            num2 = currentNum;
            num1 = operate( num1 , this.operator , num2);
            this.operator = operator;
            currentNum = '';
        }
    });
});



