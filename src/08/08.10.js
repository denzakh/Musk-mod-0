const readLine = require('readline-sync');

function esBalanceados(text) {
    const bracketPairs = { '[': ']', '{': '}', '(': ')' };
    const closingBrackets = new Set(Object.values(bracketPairs));
    const stack = [];

    for (char of text) {
        if (closingBrackets.has(char)) {
            if (char === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
        if (char in bracketPairs) {
            stack.push(bracketPairs[char]);
        }
    }
    return stack.length === 0;
}

const main = () => {
    const input = readLine.question('Introduce un texto: ');

    const result = esBalanceados(input);

    if (result) {
        console.log('Secuencia correcta.');
    } else {
        console.log('Secuencia no correcta.');
    }
};

main();
