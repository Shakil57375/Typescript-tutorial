"use strict";
let age = 21;
let sales = 123343432;
let course = "Shakil";
let is_published = true;
let label;
function test(document) {
    console.log(document);
}
let numbers = [3, 3];
let number = [3, 5, 3];
number.forEach(n => console.log(n.toString()));
let user = [2, "ff"];
user[0];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2033) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(23, 55));
//# sourceMappingURL=index.js.map