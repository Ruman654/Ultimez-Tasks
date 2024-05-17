 /*Write a JavaScript function called 'analyzeString' that takes a string as input and performs the following tasks:

1. Calculate and return the length of the string.
2. Return the string converted to lowercase.
3. Return the string converted to uppercase.
4. Check if the string contains the word ""JavaScript"" (case insensitive). Return true if it does, otherwise return false.
5. Count the number of occurrences of the letter 'a' (case insensitive) in the string and return the count. */



function analyzeString(inputString) {
    //length of string
    const lengthOfString = inputString.length

    // lowercase
    const lowerCaseString = inputString.toLowerCase()

    // uppercase
    const upperCaseString = inputString.toUpperCase()

    // Check if the string contains the word "JavaScript" (case insensitive)
    const containsJavaScript = lowerCaseString.includes("javascript")

    //  Count the number of occurrences of the letter 'a' (case insensitive)
    const CountOfA = lowerCaseString.split('a').length - 1

    return {
        length: lengthOfString,
        lowerCase: lowerCaseString,
        upperCase: upperCaseString,
        containsJavaScript: containsJavaScript,
        CountOfA: CountOfA
    }
    }

    // example 
const result = analyzeString("JavaScript is dynamic programming language.")
console.log(result)
