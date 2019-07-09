let a =1;
let b=2;
console.log(a+b);

console.log(sum(a, b));
function sum(n1, n2) {
    return n1+n2;
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count ++) {
        result *= base;
    }
    return result;
}

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find (current + 5, `(${history} + 5)`)||
                    find (current * 3, `(${history} *3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));