const readLine = require('readline-sync');
//  (()(()))

const esBalanceados = (text) => {
    const stack = [];

    for (char of text) {
        if (char === ')') {
            if (char === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }

        if (char === '(') {
            stack.push(')');
        }
    }
    return stack.length === 0;
};

const main = () => {
    const input = readLine.question('Introduce un texto: ');

    const result = esBalanceados(input);

    if (result) {
        console.log('Están balanceados.');
    } else {
        console.log('No están balanceados.');
    }
};

main();
