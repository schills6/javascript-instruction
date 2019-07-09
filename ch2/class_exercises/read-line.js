const readline = require(`readline-sync`);
let name = readline.question("What is your name? ");
console.log("Hi " +name + ", nice to meet you.");

let nbrStr = readline.question("enter a #: ");
let nbr = Number(nbrStr);
console.log(nbr*2);