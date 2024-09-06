const readLine = require('readline-sync');

const randomNumber = Math.floor(Math.random() * 10) + 1;
let num;
let count = 0;
console.log(randomNumber);

while (num !== randomNumber) {
    if (num !== undefined) {
        console.log('valor no válido, inténtalo de nuevo.');
    }
    const input = readLine.question('Introduce un número: ');
    num = parseInt(input);
    count++;
}

console.log('El número es:', num, 'número aleatorio es:', count);
