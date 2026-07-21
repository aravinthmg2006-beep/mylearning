const max = 2147483647;
const min = -2147483648;

let currentResult = 0;



function isOutOfRange(value) {
    return value < min || value > max;
}



function add(a, b) {

    
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



console.log(add(1, 2));        
console.log(subtract(4, 2));   
console.log(add(3));           
console.log(multiply(4));     
console.log(divide(10, 5));  
console.log(divide(0));        
console.log(add(1, 10));       
