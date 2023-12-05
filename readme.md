# Simple Calculator App

This is a basic web-based calculator application that allows users to perform arithmetic operations. It includes features such as addition, subtraction, multiplication, division, and clearing the input.

## Usage

1. Open the `index.html` file in a web browser.
2. The calculator UI will be displayed with numeric buttons, arithmetic operators, and special buttons.
3. Use numeric buttons to input numbers.
4. Use arithmetic operator buttons (+, -, *, /) to perform operations.
5. Click the '=' button to evaluate the expression and display the result.
6. Click the 'AC' button to clear the input and start a new calculation.
7. Click the 'DEL' button to delete the last entered character.

## Code Structure

- The HTML file (`index.html`) contains the structure of the calculator UI.
- The JavaScript file (`script.js`) handles the logic for button clicks, input processing, and result display.

## How it Works

- The calculator maintains an input string to store the entered expression.
- Click event listeners are added to each button to handle user interactions.
- Numeric and operator buttons update the input string.
- '=' button evaluates the expression using the `eval` function and displays the result.
- 'AC' button clears the input, and 'DEL' button removes the last character.


