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
