// Task for Objects in JavaScript
function Person(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
}

const person1 = new Person("Alice", 30, "Female", "Engineer");
const person2 = new Person("Bob", 25, "Male", "Designer");

console.log(`Person 1: Name: ${person1.name}, Age: ${person1.age}, Gender: ${person1.gender}, Occupation: ${person1.occupation}`);
console.log(`Person 2: Name: ${person2.name}, Age: ${person2.age}, Gender: ${person2.gender}, Occupation: ${person2.occupation}`);

// Task on Sets
function uniqueSet(arr) {
    return new Set(arr);
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = uniqueSet(numbers);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }

function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

console.log(union(setA, setB)); // Output: Set { 1, 2, 3, 4 }
console.log(intersection(setA, setB)); // Output: Set { 2, 3 }
console.log(difference(setA, setB)); // Output: Set { 1 }

function isSubset(setA, setB) {
    for (let elem of setA) {
        if (!setB.has(elem)) {
            return false;
        }
    }
    return true;
}

const setC = new Set([1, 2]);
console.log(isSubset(setC, setA)); // Output: true
console.log(isSubset(setB, setA)); // Output: false

// Task on Maps
const myMap = new Map();

myMap.set("name", "Alice");
myMap.set("age", 30);
myMap.set("occupation", "Engineer");

console.log(myMap.get("name")); // Output: Alice

myMap.set("age", 31);
console.log(myMap.get("age")); // Output: 31

myMap.delete("occupation");
console.log(myMap.has("occupation")); // Output: false

console.log(myMap); // Output: Map { 'name' => 'Alice', 'age' => 31 }
