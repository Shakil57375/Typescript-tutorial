let age:number = 21;
let sales = 123_343_432
let course = "Shakil"
let is_published = true;
let label;
function test(document:any){
    console.log(document)
}
// arrays
let numbers: number[] = [3, 3]// you can't write a string their because you have already declared it as  number of array.
// another way
let number = [3,5,3] // you have to tye the numbers only then it will automatically think that it's an array of number. If you type any string it will not give you error but it will lose the data-types.

number.forEach(n => console.log(n.toString()))
// tuples
let user: [number, string] = [2, "ff"]
user[0]
// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {Small = 1, Medium, Large}
let mySize: Size= Size.Medium
console.log(mySize)

// functions

function calculateTax(income : number, taxYear = 2022): number{
    if(taxYear < 2033){
        return income * 1.2
    }
    return income * 1.3
}

calculateTax(23, 55)