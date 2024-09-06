const readLine = require('readline-sync');

// Puede intentar reducir la complejidad a O(1) si ejecuta la función una vez y almacena en caché los resultados.
// no debería haber diferencia entre mapa y objeto
const cacheObj = {
    1: [1],
    2: [1, 1],
};
const max = 100;

const setFibCache = () => {
    let arr = [1, 1];
    let a = 1;
    let b = 1;
    let tempB = 0;

    for (let i = 3; i < max; i++) {
        tempB = b;
        b = a + b;
        a = tempB;
        arr.push(b);
        cacheObj[i] = [...arr];
    }
};

const getFib = (n) => {
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

const getFibCache = (input) => {
    const n = Number(input);

    if (isNaN(n) || n < 1) {
        return '¡Error, nececito número entero positivo!';
    }

    if (cacheObj[n]) {
        return cacheObj[n];
    }

    return getFib(n);
};

const main = () => {
    setFibCache();
    console.log(`tamaño del caché ${Object.keys(cacheObj).length}`);

    while (true) {
        const input = readLine.question('número entero positivo: ');
        const arr = getFibCache(input);

        console.log(arr);

        if (Array.isArray(arr)) {
            break;
        }
    }
};

main();
