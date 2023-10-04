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
let c: string | number;
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
// object signature
let goodObj: {
  name: string;
  age: number;
  adult: boolean;
};

goodObj = {
  name: "Shakil",
  age: 21,
  adult: true,
  //  hobby : ["foot"] will occur an error cz you didn't assign any hobby or array data type in the previous object.
};

// ! Dynamic Type / Any Type

// we can set and value to set any datatype to a variable
let any: any;

any = 5;
any = "shakil";
// ! any type array
let anyArray: any[] = [];
anyArray.push("na");
anyArray.push(44);

// ! any type object

let anyObject: {
  name: any;
  age: any;
};

anyObject = {
  name: "Bangladesh",
  age: 52,
};

// ! function

/* let MyFunc:Function

MyFunc = (a: string, b:string) =>{
  console.log(`Hello ${a} and ${b}`)
} */

let MyFunc = (a: string, b: string) => {
  console.log(`Hello ${a} and ${b}`);
};

MyFunc("S", "F");
// !optional parameter

/* let MyFunc2 = (a: string, b:string, c?:number) =>{
  console.log(`Hello ${a} and ${b}`)
}

MyFunc2("S","F"); */

// ? default value of parameter.

let MyFunc2 = (a: string, b: string, c: number = 33) => {
  console.log(`Hello ${a} and ${b} and ${c}`);
};

MyFunc2("S", "F", 5);
// ! return type void
// let voidReturn = () =>{
//   return
// }

// ? return type string
let stringReturn = (a: string, b: string) => {
  return a + b;
};

/* // * return type number
let NumberReturn = (a: number, b: number) =>{
  return (a + b)
} */

let setExplicitReturn = (a: string, b: string): string => {
  return a + b;
};

// ! Type Aliases

type stringOrNumber = string | number;
type userType = { name: string; age: number };
let userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`User id is ${id} name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

// Call the function with name and age values
sayHello({ name: "John", age: 30 }); // Example values for name and age

// Function Signatures
// * you can't add any parameter to the function before adding any parameter on the signature.
let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
  // console.log(a + b) // ! will return error because we set number as return value in the signature and it will return void.
  return a + b; // ? will return number
};
console.log(add(3, 4));

// calculate number.
// if you didn't return anything from the blocks then typescript will provide errors.
/* let Calculate: (x: number, y: number, c: string) => number;
Calculate = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(Calculate(5, 6, "minus ")); */

// complex function signature.
let userDetail: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetail = (
  id: number | string, // have to provide number and string can't provide one.
  user: {
    // * can change
    name: string; // ! can't change
    age: number; // ! can't change
  }
) => {
  return;
};
// ! classes
// ? We can modify the access by using access modifier
// // * there is 3 different kids of modifiers in typescript
// // ? they are : 1. public 2. private & 3. readonly
// // * public: If you give public modifier to any of our class variable any one can change or access it.
// // * private : If you give private modifier to any of our class variable no one can change or access it.
// // * readonly : If you give readonly modifier to any of our class variable no one can change or but they can access it.
// class Player {
//   // brief
//   /* public name : string;
//   private age : number;
//   readonly country : string;
//   constructor(n: string, a : number, c:string){
//     this.name = n;
//     this.age = a;
//     this.country = c
//   } */
// // * shortcut
//   constructor(
//     public name: string,
//     private age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(`${this.name} from ${this.country} is playing`);
//   }
// }
// imported player name from player.ts
import { Player } from "./classes/player.js";
const mash = new Player("Mash", 38, "Bangladesh");
console.log(mash);
const sak = new Player("Sakib", 36, "Bangladesh");
sak.name = "Sakib"; // we can change it.
// sak.age = 33 //! Error : Property 'age' is private and only accessible within class 'Player'.
//mash.country = "India" //! Error : Cannot assign to 'country' because it is a read-only property.
const players: Player[] = [];
// console.log(sak.age) //! Error: Property 'age' is private and only accessible within class 'Player'.
console.log(mash.country); // we can access it
players.push(mash);
players.push(sak);
console.log(players);
// ! typescript object interface
// * Interface provide us any kind of structure of class and objects.
interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

let threeDbOptions = {
  width: 30,
  length: 20,
  height: 34,
};
drawRectangle(threeDbOptions);

// GENERICS

/*
What are Generics?
Generics have been a major feature of strongly typed languages 
like Java and C#. In TypeScript, they allow the types of components 
and functions to be "SPECIFIED LATER" which allows them to be used 
in creating reusable components that can apply to different use cases, 

for example:
*/

function returnInput<Type>(arg: Type): Type {
  return arg;
}
const returnInputStr = returnInput<string>("Foo Bar");
const returnInputNum = returnInput<number>(5);

console.log(returnInputStr); // Foo Bar
console.log(returnInputNum); // 5
// <T> Receives the types of objects. <T> type converts any datatype to strings. // ! to avoid this default behavior we can explicitly declare it to object array or any kind of datatype as an example
const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
// * will work
let user = addId({
  name: "Mash",
  age: 40,
  country: "bangladesh",
});

// ! will not work
/* const users = ["nani", "dadi"]
addId(users) */

// Generics Interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

// ENUM Types
// String enum
/* enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
} */

enum Weekday {
  MONDAY = "mon",
  TUESDAY = "tue",
  WEDNESDAY = "wed",
}

type WeekdayType = `${Weekday}`;