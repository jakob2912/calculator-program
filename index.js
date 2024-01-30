const displayElem = document.getElementById('display');

function appendToDisplay(input) {
  displayElem.value += input;
}

function calculate() {
  try {
    displayElem.value = eval(displayElem.value);
  }
  catch(error) {
    displayElem.value = 'Error';
  }
  
}

function clearDisplay() {
  displayElem.value = '';
}