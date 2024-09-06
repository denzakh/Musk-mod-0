const readLine = require('readline-sync');

const strEjemplo =
    'Recordar es fácil para quien tiene memoria, olvidar es difícil para quien tiene corazón';

const palabrasRepetidas = (str) => {
    const store = {};
    const setResult = new Set();

    str.toLowerCase()
        .split(' ')
        .forEach((key) => {
            if (key in store) {
                store[key]++;
            } else {
                store[key] = 1;
            }
            // para no repetir dos veces
            if (store[key] > 1) {
                setResult.add(key);
            }
        });

    const result = Array.from(setResult.keys());

    if (!result.length) {
        return `Sin palabras repetidas`;
    }
    return `Se repiten las siguientes palabras: ${result.join(', ')}`;
};

const main = () => {
    const input = readLine.question('Introduce un texto: ');
    const result = palabrasRepetidas(input);
    console.log(result);
};

main();
