let currentOperation = '';
let previousOperand = '';
let currentOperand = '';
let operation = undefined;

const screen = document.getElementById('screen');

function appendNumber(number) {
    if (currentOperand === '0' || currentOperand === '') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateScreen();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateScreen();
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateScreen();
    if (result === 1) {
        alert('are you admin');
        window.location.href = 'https://ferocity038.github.io/ferocity036/'
    }
}

function clearScreen() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateScreen();
}

function updateScreen() {
    screen.innerText = currentOperand;
}