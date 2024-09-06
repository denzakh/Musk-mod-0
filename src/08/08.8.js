const readLine = require('readline-sync');

// Complejidad del tiempo: O(sqrt(n))
const isPrime = (num) => {
    // Al verificar de 2 a sqrt(N), si encontramos un número que es factor de N,
    // significará que el número tiene más de 2 factores,
    // por lo que el número no será un número primo.

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }

    // De lo contrario, si no encontramos ningún factor de N,
    // significa que N tiene sólo 2 factores, 1 y él mismo,
    // por lo que es un número primo.

    return num > 1;
};

const main = () => {
    let input = '';

    while (true) {
        input = readLine.question('Introduce un número: ');

        if (!Number.isNaN(Number(input))) {
            break;
        }
    }

    const result = isPrime(input);

    if (result) {
        console.log(`${input} es primo`);
    } else {
        console.log(`${input} no es primo`);
    }
};

main();
