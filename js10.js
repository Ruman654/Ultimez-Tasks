function reverseString(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("OpenAI")); // Output: "IAnepO"
console.log(reverseString("12345")); // Output: "54321"




 // Write a JavaScript function called reverseString that takes a string as a parameter and returns the reverse of that string. 1. Define the reverseString function. 2. Add a parameter str to the function to accept the input string. 3. Use JavaScript's built-in string manipulation methods to reverse the string. 4. Return the reversed string. 5. Test the function with different input strings to ensure it works correctly.