function Rectangle(a,b) {
    let area = a*b
    return area
}
function perimeterRect(a, b) {
    let perimeter = 2 * (a + b);
    return perimeter;
}
let a = 5
let b = 8
console.log("Area = " +Rectangle(a,b))
console.log("Perimeter = " + perimeterRect(a, b))