const country = "Bangladesh"
console.log(country)

/* let playerName = "Mash"
console.log(playerName)
// playerName = 32;// Assigning a number to a variable previously assigned a string in TypeScript results in a type error. The error will be "type 'number' is not assignable to type 'string'"
console.log(playerName) */
// another way to declare will not provide any error
// When declaring and defining a variable together, TypeScript can identify errors. If a variable is declared first and then assigned a string value, it can be reassigned a different datatype without any errors in TypeScript.
// That's what happened here
let playerName;
console.log(playerName)// undefined
playerName = "Tamim"
playerName = 33;
console.log(playerName)