// Write a JavaScript function called calculateAge that takes two parameters: birthYear and currentYear. The function should calculate the age of a person based on their birth year and the current year, and then return a string that says ""You are [age] years old.""

function calculateAge(birthYear,currentYear){
    let age = currentYear - birthYear
    return `You are ${age} years old.`
}

// example of myage :
let birthYear = 2003
let currentYear = 2024
console.log(calculateAge(birthYear,currentYear)) // You are 21 years old.



