var country = "Bangladesh";
console.log(country);
// common errors when we work with the variables.
/* let playerName = "Mash"
console.log(playerName)
// ! playerName = 32;  Assigning a number to a variable previously assigned a string in TypeScript results in a type error. The error will be "type 'number' is not assignable to type 'string'"
console.log(playerName) */
// another way to declare will not provide any error
// When declaring and defining a variable together, TypeScript can identify errors. If a variable is declared first and then assigned a string value, it can be reassigned a different datatype without any errors in TypeScript.
// That's what happened here
var playerName;
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
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
// Array
var stringArray = ["Me", "myself"];
// stringArray.push(22) ❌ you can't push any number to a string Array in typescript.
var numberArray = [32, 44];
// numberArray.push("Shakil")  ❌ you can't push any number to a string Array in typescript.
var mixedArray = ["me", 33, true];
// mixedArray.push({
//     name : "Shakil"
// }) ❌ you can't push any number to a object because there is no object in the previously if you want to push an array you can just create an array when you create the function.
// object
var MyObj = {
    name: "Shakil",
    age: 21,
    student: true,
};
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
var cars = {
    type: "Toyota",
};
cars.type = "Ford"; // no error
//   cars.type = 2; // Error: Type 'number' is not assignable to type 'string'.
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
var car_toyota = {
    // no error
    type: "Toyota",
};
car_toyota.mileage = 2000;
// Explicit and Union Types
// variables
var a; // can't assign numbers
var b; // can't assign strings
// if you want to assign both number and string on a variable you can just write it.
var c;
// array
var array = [];
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
var goodObj;
goodObj = {
    name: "Shakil",
    age: 21,
    adult: true,
    //  hobby : ["foot"] will occur an error cz you didn't assign any hobby or array data type in the previous object.
};
// ! Dynamic Type / Any Type
// we can set and value to set any datatype to a variable
var any;
any = 5;
any = "shakil";
// ! any type array
var anyArray = [];
anyArray.push("na");
anyArray.push(44);
// ! any type object
var anyObject;
anyObject = {
    name: "Bangladesh",
    age: 52,
};
// ! function
/* let MyFunc:Function

MyFunc = (a: string, b:string) =>{
  console.log(`Hello ${a} and ${b}`)
} */
var MyFunc = function (a, b) {
    console.log("Hello ".concat(a, " and ").concat(b));
};
MyFunc("S", "F");
// !optional parameter
/* let MyFunc2 = (a: string, b:string, c?:number) =>{
  console.log(`Hello ${a} and ${b}`)
}

MyFunc2("S","F"); */
// ? default value of parameter.
var MyFunc2 = function (a, b, c) {
    if (c === void 0) { c = 33; }
    console.log("Hello ".concat(a, " and ").concat(b, " and ").concat(c));
};
MyFunc2("S", "F", 5);
// ! return type void
// let voidReturn = () =>{
//   return
// }
// ? return type string
var stringReturn = function (a, b) {
    return a + b;
};
/* // * return type number
let NumberReturn = (a: number, b: number) =>{
  return (a + b)
} */
var setExplicitReturn = function (a, b) {
    return a + b;
};
var userDetails = function (id, user) {
    console.log("User id is ".concat(id, " name is ").concat(user.name, " and age is ").concat(user.age));
};
var sayHello = function (user) {
    console.log("Hello ".concat(user.age > 50 ? "Sir" : "Mr.", " ").concat(user.name));
};
// Call the function with name and age values
sayHello({ name: "John", age: 30 }); // Example values for name and age
// Function Signatures
// * you can't add any parameter to the function before adding any parameter on the signature.
var add;
add = function (a, b) {
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
var userDetail;
userDetail = function (id, // have to provide number and string can't provide one.
user) {
    return;
};
// ! classes
// We can modify the access by using access modifier
// * there is 3 different kids of modifiers in typescript
// ? they are : 1. public 2. private & 3. readonly
// * public: If you give public modifier to any of our class variable any one can change or access it.
// * private : If you give private modifier to any of our class variable no one can change or access it.
// * readonly : If you give readonly modifier to any of our class variable no one can change or but they can access it.
var Player = /** @class */ (function () {
    // brief
    /* public name : string;
    private age : number;
    readonly country : string;
    constructor(n: string, a : number, c:string){
      this.name = n;
      this.age = a;
      this.country = c
    } */
    // * shortcut
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing"));
    };
    return Player;
}());
var mash = new Player("Mash", 38, "Bangladesh");
console.log(mash);
var sak = new Player("Sakib", 36, "Bangladesh");
sak.name = "Sakib"; // we can change it.
// sak.age = 33 //! Error : Property 'age' is private and only accessible within class 'Player'.
//mash.country = "India" //! Error : Cannot assign to 'country' because it is a read-only property.
var players = [];
// console.log(sak.age) //! Error: Property 'age' is private and only accessible within class 'Player'.
console.log(mash.country); // we can access it
players.push(mash);
players.push(sak);
console.log(players);
// 
