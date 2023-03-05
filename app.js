let input = '';
let resultElement = document.getElementById('result');

function clearInput() {
  input = '';
  resultElement.value = '';
}

function appendInput(value) {
  input += value;
  resultElement.value = input;
}

function backspace() {
  input = input.slice(0, -1);
  resultElement.value = input || '';
}

function calculate() {
  try {
    input = eval(input);
    resultElement.value = input;
  } catch (error) {
    resultElement.value = 'Error';
  }
}