// Get the variables for adding events
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// Initialize what we need for operarations;
var operand1 = 0;
var operand2 = null;
var operator = null;

//Function for finding operator
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}
//Script Logic starts here

//Go through each var 'buttons'
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        //get vars from a single button click
        //data-value and text content from html
        //Store in two vars after accessing
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}
