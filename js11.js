function calculate(num1, num2, operation, callbackFunc) {
    let result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
            break;
        default:
            return "Error: Invalid operation!";
    }
    
    // Call the callback function with the result
    callbackFunc(result);
}

// Example usage:
function callback(result) {
    console.log("The result is:", result);
}

calculate(10, 5, '+', callback);  // Output: The result is: 15
calculate(10, 5, '/', callback);  // Output: The result is: 2
calculate(10, 0, '/', callback);  // Output: Error: Division by zero!
calculate(10, 5, '^', callback);  // Output: Error: Invalid operation!
