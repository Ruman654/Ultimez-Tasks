// 1. Initialize an array named names with the following values: ["John", "Jane", "Doe", "Alice", "Bob"].
let names = ["John", "Jane", "Doe", "Alice", "Bob"];

// 2. Print all the names in the array to the console, each on a new line.
console.log("Names in the array:");
names.forEach(name => console.log(name));

// 3. Add the name "Eve" to the end of the array.
names.push("Eve");

// 4. Remove the name "Doe" from the array.
let indexDoe = names.indexOf("Doe");
if (indexDoe !== -1) {
  names.splice(indexDoe, 1);
}

// 5. Sort the array in alphabetical order.
names.sort();

// 6. Check if the name "Alice" exists in the array. Print "Alice is present" if it does, otherwise print "Alice is not present".
if (names.includes("Alice")) {
  console.log("Alice is present");
} else {
  console.log("Alice is not present");
}

// 7. Convert all the names to uppercase and store them in a new array named uppercaseNames.
let uppercaseNames = names.map(name => name.toUpperCase());

// 8. Print the uppercaseNames array to the console.
console.log("Uppercase Names:");
console.log(uppercaseNames);
