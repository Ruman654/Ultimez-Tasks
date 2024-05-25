// Examples of Conditional Statements

// If Statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// If-Else Statement
x = 3;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}

// Elif Statement
x = 5;
if (x > 5) {
    console.log("x is greater than 5");
} else if (x === 5) {
    console.log("x is equal to 5");
} else {
    console.log("x is less than 5");
}

// Examples of Looping Statements

// For Loop
console.log("For Loop Example:");
for (let i = 0; i < 5; i++) {  // Iterates from 0 to 4
    console.log(i);
}

// While Loop
console.log("\nWhile Loop Example:");
x = 0;
while (x < 5) {
    console.log(x);
    x++;
}

// Nested Loops
console.log("\nNested Loops Example:");
for (let i = 0; i < 3; i++) {  // Outer loop
    for (let j = 0; j < 2; j++) {  // Inner loop
        console.log(`i=${i}, j=${j}`);
    }
}

// Combining Conditional and Looping Statements
console.log("\nCombining Conditional and Looping Statements Example:");
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// Practical Example: Finding Prime Numbers in a Range

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let start = 10;
let end = 50;

console.log(`\nPrime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
