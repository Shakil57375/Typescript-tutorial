const country = "Bangladesh";
console.log(country);
// common errors when we work with the variables.
/* let playerName = "Mash"
console.log(playerName)
// playerName = 32;// Assigning a number to a variable previously assigned a string in TypeScript results in a type error. The error will be "type 'number' is not assignable to type 'string'"
console.log(playerName) */
// another way to declare will not provide any error
// When declaring and defining a variable together, TypeScript can identify errors. If a variable is declared first and then assigned a string value, it can be reassigned a different datatype without any errors in TypeScript.
// That's what happened here
let playerName;
console.log(playerName); // undefined
playerName = "Tamim";
playerName = 33;
console.log(playerName);

// common errors when working with function in typescript
// When we fail to specify the data types of the parameters, we might pass inappropriate arguments. For example, we could send a string when we need a number, or provide a number when we require a string. Fortunately, in TypeScript, defining the data types of the parameters can prevent these errors and save time. By specifying the data types, we can identify errors beforehand, which minimizes errors in the browser and highlights them in code editors. Therefore, it is essential to specify the data types of the parameters to avoid such issues.
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
