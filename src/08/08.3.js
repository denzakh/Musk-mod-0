const readLine = require('readline-sync');

const miraFrecuenciaDeCadaCaracter = (str) => {
    const map = new Map();

    const filtred = str.toLowerCase().match(/\w/g);

    filtred.forEach((key) => {
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    });

    return map.entries();
};

const main = () => {
    const input = readLine.question('Introduce un texto: ');

    const result = miraFrecuenciaDeCadaCaracter(input);
    console.log('Mapa de frecuencias:');
    console.log(result);
};

main();
