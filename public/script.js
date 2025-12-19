let display = document.getElementById('display');

// Add numbers or operators to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        // eval() takes the string "2+2" and runs it as math
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}