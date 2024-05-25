// 1. Initialize an array named numbers with the following values: [10, 5, 8, 3, 12, 6]
let numbers = [10, 5, 8, 3, 12, 6];

// 2. Print the length of the array to the console
console.log("Length of the array:", numbers.length);

// 3. Add the number 7 to the end of the array
numbers.push(7);
console.log("Array after adding 7:", numbers);

// 4. Remove the first element of the array
numbers.shift();
console.log("Array after removing the first element:", numbers);

// 5. Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("Array after sorting in ascending order:", numbers);

// 6. Reverse the array
numbers.reverse();
console.log("Array after reversing:", numbers);

// 7. Check if the number 8 exists in the array
if (numbers.includes(8)) {
    console.log("Number 8 exists");
} else {
    console.log("Number 8 doesn't exist");
}

// 8. Find the index of the number 12 in the array and print it to the console
let index = numbers.indexOf(12);
console.log("Index of number 12:", index);

// 9. Create a new array named doubledNumbers by doubling each number in the numbers array
let doubledNumbers = numbers.map(number => number * 2);

// 10. Print the doubledNumbers array to the console
console.log("Doubled numbers array:", doubledNumbers);
