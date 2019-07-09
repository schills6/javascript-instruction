let array = [1, 2, 3, 4];

function reverseArray (array) {
    let reverseNumbers = [];
    for (let i = (array.length - 1); i>=0; i--) {
        reverseNumbers.push(array[i]);
    }
    return reverseNumbers;
}

console.log(reverseArray(array));

/*didn't work the way I hoped...
let array = [1, 2, 3, 4];
console.log(reverseArray(array));

function reverseArrayInPlace(array) {
    for (let i=0; i<=(array.length -1); i++) {
        array.unshift(array[i]);
    }
    return array;
}*/

function reverseArrayInPlace(array){
for (let i = 0; i < (array.length/2) ; i++) {
    let a = array[i];
    let end = array[array.length-1-i];
    let b = array[end];
    array[i]=b;
    array[end]=a; 
    }
}

console.log("\nreverseArrayin Place...");
console.log(reverseArrayInPlace(array));