const readLine = require('readline-sync');

// orden de complejidad O(n)
const getFib = (input) => {
    let arr = [];
    const n = Number(input);

    if (isNaN(n) || n < 1) {
        return '¡Error, nececito número entero positivo!';
    }

    if (n === 1) {
        arr = [1];
        return arr;
    }

    if (n === 2) {
        arr = [1, 1];
        return arr;
    }

    arr = [1, 1];

    let a = 1;
    let b = 1;
    let tempB = 0;

    for (let i = 2; i < n; i++) {
        tempB = b;
        b = a + b;
        a = tempB;
        arr.push(b);
    }
    return arr;
};

const main = () => {
    while (true) {
        const input = readLine.question('número entero positivo: ');
        const arr = getFib(input);

        console.log(arr);

        if (Array.isArray(arr)) {
            break;
        }
    }
};

main();
