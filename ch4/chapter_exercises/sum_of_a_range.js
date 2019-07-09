function range (start, end, step) {
    let numbers = [];
    if (start < end) {
        for (i=start; i<=end; i+=step){
            numbers.push(i)
        }
    } else if (start > end) {
        for (i=start; i>=end; i+=step){
            numbers.push(i)
        }
    }
    return numbers;  
}

function sum (numbers) {
    let numberSum = 0;
    for(let number of numbers) {
        numberSum += number;
    }
    return numberSum;
}

//console.log(sum(range(1, 10)));

console.log(range(5, 2, -1));