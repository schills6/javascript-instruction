let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrayToList(array){
    let list = null;
    for(let i= array.length -1; i>=0; i--) {
        list = {value: array[i], rest:list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node=node.rest){
        array.push(node.value);
    }
    return array;
}

function prepend (value, list) {
   return {value, list:list};
}

function nth (list, number) {
    if(!list) return undefined;
    else if(number == 0) return list.value;
    else return nth(list.rest, n-1);

}val

console.log(arrayToList([10,20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));