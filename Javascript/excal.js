let currentResult = 2;

function add(a, b) {

    if (b === undefined) {
        b = a;
        a = currentResult;
    }

    return a + b;
}

console.log(add(1));
console.log(add(3))