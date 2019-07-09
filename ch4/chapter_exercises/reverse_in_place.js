function reverseArrayInPlace(array) {
    for (let i=0; i< array.length; i++) {
        let x = array.splice(i, 1).pop();
        array.unshift(x);
    }
    return array;
}

let array = [1, 2, 3, 4];
console.log(reverseArrayInPlace(array));