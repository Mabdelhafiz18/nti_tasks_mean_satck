function multiply(num1, num2) {
    return num1 * num2;
}



function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function displayResult(result) {
    console.log("The result is:", result);
}



var num1 = 4;
var num2 = 3;
var result = calculate(num1, num2, multiply);


displayResult(result);