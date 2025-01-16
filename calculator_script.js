let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput || '0';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function calculateResult() {
  if (previousInput === '' || currentInput === '') return;
  
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        result = 'Error';
      } else {
        result = prev / curr;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay();
}

function calculateSquareRoot() {
  if (currentInput === '') return;
  currentInput = Math.sqrt(parseFloat(currentInput)).toString();
  updateDisplay();
}

function calculatePercentage() {
  if (currentInput === '') return;
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}
