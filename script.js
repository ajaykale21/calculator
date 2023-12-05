// Get the input element with the id 'inputBox'
let input = document.getElementById('inputBox');

// Get all the buttons on the page
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input expression
let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons);

// Iterate through each button in the array
arr.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // Check if the clicked button is '='
        if (e.target.innerHTML == '=') {
            // Evaluate the expression and update the input value
            string = eval(string);
            input.value = string;
        }
        // Check if the clicked button is 'AC' (all clear)
        else if (e.target.innerHTML == 'AC') {
            // Clear the input string and update the input value
            string = "";
            input.value = string;
        }
        // Check if the clicked button is 'DEL' (delete)
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the input string and update the input value
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // If none of the special buttons is clicked, add the button's content to the input string
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
