// function calculate(expression) {
//     let numbers = [];
//     let operators = [];

//     let tokens = expression.match(/\d+|[+\-*/]/g);

//     function precedence(operator) {
//         if (operator === "+" || operator === "-") {
//             return 1;
//         }

//         if (operator === "*" || operator === "/") {
//             return 2;
//         }

//         return 0;
//     }

//     function applyOperation() {
//         let b = numbers.pop();
//         let a = numbers.pop();
//         let operator = operators.pop();

//         let result;

//         if (operator === "+") {
//             result = a + b;
//         } else if (operator === "-") {
//             result = a - b;
//         } else if (operator === "*") {
//             result = a * b;
//         } else if (operator === "/") {
//             result = a / b;
//         }

//         numbers.push(result);

//         console.log(a, operator, b, "=", result);
//     }

//     for (let token of tokens) {
//         if (!isNaN(token)) {
//             numbers.push(Number(token));
//         } else {
//             while (
//                 operators.length > 0 &&
//                 precedence(operators[operators.length - 1]) >= precedence(token)
//             ) {
//                 applyOperation();
//             }

//             operators.push(token);
//         }
//     }

//     while (operators.length > 0) {
//         applyOperation();
//     }

//     return numbers[0];
// }


// // Infinite loop
// while (true) {
//     console.log("----- New Calculation -----");

//     calculate("3+6+1*1");
// }





// function calculate(expression) {
//     let numbers = [];
//     let operators = [];

//     // Convert expression into numbers and operators
//     let tokens = expression.match(/\d+|[+\-*/]/g);

//     function precedence(operator) {
//         if (operator === "+" || operator === "-") {
//             return 1;
//         }

//         if (operator === "*" || operator === "/") {
//             return 2;
//         }

//         return 0;
//     }

//     function applyOperation() {
//         let b = numbers.pop();
//         let a = numbers.pop();
//         let operator = operators.pop();

//         let result;

//         if (operator === "+") {
//             result = a + b;
//         }

//         else if (operator === "-") {
//             result = a - b;
//         }

//         else if (operator === "*") {
//             result = a * b;
//         }

//         else if (operator === "/") {

//             // Check division by zero
//             if (b === 0) {
//                 console.log("Cannot divide by zero");

//                 // Stop the complete program
//                 process.exit();
//             }

//             result = a / b;
//         }

//         numbers.push(result);

//         console.log(a, operator, b, "=", result);
//     }

//     // Process every token
//     for (let token of tokens) {

//         if (!isNaN(token)) {
//             numbers.push(Number(token));
//         }

//         else {

//             // Apply higher/equal precedence operator first
//             while (
//                 operators.length > 0 &&
//                 precedence(operators[operators.length - 1]) >= precedence(token)
//             ) {
//                 applyOperation();
//             }

//             operators.push(token);
//         }
//     }

//     // Apply remaining operators
//     while (operators.length > 0) {
//         applyOperation();
//     }

//     return numbers[0];
// }


// // Run calculation every 1 second
// setInterval(() => {

//     console.log("\n----- New Calculation -----");

//     calculate("3+6+1*1");

// }, 1000);



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function calculator() {

    let firstNumber = Number(
        await ask("Enter first number: ")
    );

    while (true) {

        let operator = await ask(
            "Enter operator (+, -, *, /) or q to quit: "
        );

        if (operator === "q") {
            console.log("Calculator stopped.");
            break;
        }

        let secondNumber = Number(
            await ask("Enter next number: ")
        );

        if (operator === "/" && secondNumber === 0) {
            console.log("Cannot divide by zero");
            break;
        }

        let result;

        if (operator === "+") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "-") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "*") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "/") {
            result = firstNumber / secondNumber;
        }

        else {
            console.log("Invalid operator");
            continue;
        }

        console.log(
            `${firstNumber} ${operator} ${secondNumber} = ${result}`
        );

        // The result becomes the next first number
        firstNumber = result;
    }

    rl.close();
}

calculator();

// add(1,2)
// sub(4,2)
// add(1)
// multiple(4)
// divide(10,5)
// divide(0)
// add(1,10)

// 3
// 2
// 3
// 12
// 2
// cannot divide
// 11
