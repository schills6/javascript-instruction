const readline = require(`readline-sync`);


function countBs(theWord) {
    return countChar(theWord, "B");
}

function countChar(theWord, char){
    let c = 0;
    for (let i = 0; i < theWord.length; i++) {
        if (theWord[i]==char){
            c++;
        }
    }
    return c;
}
let theWord = readline.question("What is your word? ");
console.log(countBs(theWord));
let theWord2 = readline.question("What's another word?");
let char = readline.question("What's the character?");
console.log(countChar(theWord2, char));