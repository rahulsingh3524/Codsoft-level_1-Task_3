// script.js
const buttonsContainer = document.querySelector('.buttons');
const display = document.getElementById('display');

const operators = ['+', '-', '*', '/'];

// Create number and operator buttons
for (let i = 1; i <= 9; i++) {
    createButton(i.toString());
}

for (const operator of operators) {
    createButton(operator);
}

createButton('0');
createButton('.');
createButton('C'); // Clear button
createButton('='); // Calculate button

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => handleButtonClick(text));
    buttonsContainer.appendChild(button);
}

let currentInput = '';
let currentOperator = '';
let currentResult = '';

function handleButtonClick(value) {
    if (value === '=' && currentInput !== '') {
        if (currentOperator && currentResult) {
            currentResult = eval(`${currentResult} ${currentOperator} ${currentInput}`);
            display.value = currentResult;
            currentInput = '';
            currentOperator = '';
        }
    } else if (value === 'C') {
        display.value = '';
        currentInput = '';
        currentOperator = '';
        currentResult = '';
    } else if (operators.includes(value)) {
        if (currentInput !== '') {
            if (currentOperator && currentResult) {
                currentResult = eval(`${currentResult} ${currentOperator} ${currentInput}`);
            } else {
                currentResult = currentInput;
            }
            currentOperator = value;
            display.value = currentResult;
            currentInput = '';
        }
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}
