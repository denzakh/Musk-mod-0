const readLine = require('readline-sync');

const getCountMap = (str) => {
    const map = new Map();

    str.toLowerCase()
        .split('')
        .forEach((key) => {
            if (map.has(key)) {
                map.set(key, map.get(key) + 1);
            } else {
                map.set(key, 1);
            }
        });

    return map;
};

const isAnagrama = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const map1 = getCountMap(str1);
    const map2 = getCountMap(str2);

    for (let [key1, value1] of map1.entries()) {
        if (!map2.has(key1)) {
            return false;
        }
        if (map2.get(key1) !== value1) {
            return false;
        }
    }

    return true;
};

const main = () => {
    const input1 = readLine.question('Introduce una palabra: ');
    const input2 = readLine.question('Introduce otra palabra: ');
    const result = isAnagrama(input1, input2);

    if (result) {
        console.log('Las palabras son anagramas.');
    } else {
        console.log('Las palabras no son anagramas.');
    }
};

main();
