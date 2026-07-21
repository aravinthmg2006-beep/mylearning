const max = 2147483647;
const min = -2147483648;

let currentResult = 0;


// Check whether a number is within 32-bit integer range
function isOutOfRange(value) {
    return value < min || value > max;
}


// ADD
function add(a, b) {

    // If only one argument is given,
    // use the current result
    if (b === undefined) {
        b = a;
        a = currentResult;
    }

    if (isOutOfRange(a,b) ) {
        return "out of range";
    }

    let result = a + b;

    if (isOutOfRange(result)) {
        return "result out of range";
    }

    currentResult = result;
    return result;
}


// SUBTRACT
function subtract(a, b) {

    if (b === undefined) {
        b = a;
        a = currentResult;
    }

    if (isOutOfRange(a,b) ) {
        return "out of range";
    }

    let result = a - b;

    if (isOutOfRange(result)) {
        return "result out of range";
    }

    currentResult = result;
    return result;
}


// MULTIPLY
function multiply(a, b) {

    if (b === undefined) {
        b = a;
        a = currentResult;
    }

    if (isOutOfRange(a,b) ) {
        return "out of range";
    }

    let result = a * b;

    if (isOutOfRange(result)) {
        return "result out of range";
    }

    currentResult = result;
    return result;
}


// DIVIDE
function divide(a, b) {

    if (b === undefined) {
        b = a;
        a = currentResult;
    }

    if (b === 0) {
        return "cannot divide";
    }

    if (isOutOfRange(a,b) ) {
        return "out of range";
    }

    let result = a / b;

    if (isOutOfRange(result)) {
        return "result out of range";
    }

    currentResult = result;
    return result;
}


// POWER
function power_of(a, b) {

    if (isOutOfRange(a,b) ) {
        return "out of range";
    }

    let result = Math.pow(a, b);

    if (isOutOfRange(result)) {
        return "result out of range";
    }

    currentResult = result;
    return result;
}


// TESTING

console.log(add(1, 2));        // 3
console.log(subtract(4, 2));   // 2
console.log(add(3));           // 3
console.log(multiply(4));      // 12
console.log(divide(10, 5));    // 2
console.log(divide(0));        // cannot divide
console.log(add(1, 10));       // 11
