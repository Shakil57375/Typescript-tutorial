const country = "Bangladesh";
console.log(country);
// common errors when we work with the variables.
/* let playerName = "Mash"
console.log(playerName)
// ! playerName = 32;  Assigning a number to a variable previously assigned a string in TypeScript results in a type error. The error will be "type 'number' is not assignable to type 'string'"
console.log(playerName) */
// another way to declare will not provide any error
// When declaring and defining a variable together, TypeScript can identify errors. If a variable is declared first and then assigned a string value, it can be reassigned a different datatype without any errors in TypeScript.
// That's what happened here
let playerName;
console.log(playerName); // undefined
playerName = "Tamim";
playerName = 33;
console.log(playerName);

// ? common errors when working with function in typescript
//  * When we fail to specify the data types of the parameters, we might pass inappropriate arguments. For example, we could send a string when we need a number, or provide a number when we require a string. Fortunately, in TypeScript, defining the data types of the parameters can prevent these errors and save time. By specifying the data types, we can identify errors beforehand, which minimizes errors in the browser and highlights them in code editors. Therefore, it is essential to specify the data types of the parameters to avoid such issues.
// not a good habit or practice.
/* function multiply(a, b){
    return a * b
}

console.log(multiply("ff",4)) */
// good habit or practice.
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(3, 4));

// Array

const stringArray = ["Me", "myself"];
// stringArray.push(22) ❌ you can't push any number to a string Array in typescript.

const numberArray = [32, 44];
// numberArray.push("Shakil")  ❌ you can't push any number to a string Array in typescript.

const mixedArray = ["me", 33, true];
// mixedArray.push({
//     name : "Shakil"
// }) ❌ you can't push any number to a object because there is no object in the previously if you want to push an array you can just create an array when you create the function.

// object
let MyObj = {
  name: "Shakil",
  age: 21,
  student: true,
};

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

const cars = {
  type: "Toyota",
};
cars.type = "Ford"; // no error
//   cars.type = 2; // Error: Type 'number' is not assignable to type 'string'.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

const car_toyota: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car_toyota.mileage = 2000;

// Explicit and Union Types
// variables
let a: string; // can't assign numbers
let b: number; // can't assign strings
// if you want to assign both number and string on a variable you can just write it.
let c : string | number
// array
let array: (string | number)[] = [];
// you can assign strings and numbers in this array. If you tries to push object, boolean it will provide error on the code.
// array.push("sumit", 33, false)

// object
// you can assign any kind of datatypes in this object syntax.
/* let obj: object;
obj = {
    name : "Shakil",
    age : 21,
    student : true,
    hobby : ["cricket", "football"]
} */
// you can assign only defined datatypes in you object

let goodObj : {
    name : string,
    age : number,
    adult : boolean,
}

goodObj = {
    name : "Shakil",
    age : 21,
    adult : true,
    //  hobby : ["foot"] will occur an error cz you didn't assign any hobby or array data type in the previous object.
}

// ? Dynamic Type / Any Type

// we can set and value to set any datatype to a variable 
let any: any;

any = 5;
any = "shakil"
// any type array
let anyArray: any[] = [];
anyArray.push("na")
anyArray.push(44)

// any type object

let anyObject : {
  name : any,
  age : any
}

anyObject ={
  name : "Bangladesh",
  age : 52
}

// function

/* let MyFunc:Function

MyFunc = (a: string, b:string) =>{
  console.log(`Hello ${a} and ${b}`)
} */


let MyFunc = (a: string, b:string) =>{
  console.log(`Hello ${a} and ${b}`)
}

MyFunc("S","F");
// !optional parameter

/* let MyFunc2 = (a: string, b:string, c?:number) =>{
  console.log(`Hello ${a} and ${b}`)
}

MyFunc2("S","F"); */

// ? default value of parameter.

let MyFunc2 = (a: string, b:string, c:number= 33) =>{
  console.log(`Hello ${a} and ${b} and ${c}`)
}

MyFunc2("S","F", 5);
// ! return type void 
// let voidReturn = () =>{
//   return 
// }

// ? return type string
let stringReturn = (a: string, b: string) =>{
  return (a + b)
}

/* // * return type number
let NumberReturn = (a: number, b: number) =>{
  return (a + b)
} */

let setExplicitReturn = (a: string, b: string) : string =>{
  return (a + b)
}

