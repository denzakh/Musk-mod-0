const readLine = require('readline-sync');

const reverse = (str) => str.toLowerCase().split('').reverse().join('');

const main = () => {
    const input = readLine.question('Introduce una palabra: ');

    console.log(`La palabra invertida es "${reverse(input)}"`);
};

main();
