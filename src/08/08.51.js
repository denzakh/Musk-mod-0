const readLine = require('readline-sync');

const reverse = (str) => {
    const stack = [];
    const arr = str.toLowerCase().split('');

    arr.forEach((sym) => stack.unshift(sym));

    return stack.join('');
};

const main = () => {
    const input = readLine.question('Introduce una palabra: ');

    console.log(`La palabra invertida es "${reverse(input)}"`);
};

main();
