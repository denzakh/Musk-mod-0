const readLine = require('readline-sync');

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
// +1 porque ambos incluidos

const playerAttack = () => getRandomInt(5, 10);
const playerDefend = () => getRandomInt(1, 5);
const monsterAttack = () => getRandomInt(5, 10);

const rpgGame = () => {
    let monsterHP = 50;
    let playerHP = 50;
    let count = 1;

    while (monsterHP > 0 && playerHP > 0) {
        const playerAttackHP = playerAttack();
        const playerDefendHP = playerDefend();
        const monsterAttackHP = monsterAttack();

        const input = readLine.question(
            'Ingrese el comando de acción, 1 - ataque, 2 - defensa: ',
        );
        let num = parseInt(input);

        if (num === 1 || num === 2) {
            if (num === 1) {
                monsterHP = monsterHP - playerAttackHP;

                if (monsterHP <= 0) {
                    break;
                }

                playerHP = playerHP - monsterAttackHP;
            } else {
                // La defensa no debería sumar vidas.
                const monsterAttackDefHP =
                    monsterAttackHP - playerDefendHP > 0
                        ? monsterAttackHP - playerDefendHP
                        : 0;
                playerHP = playerHP - monsterAttackDefHP;
            }
            if (playerHP <= 0) {
                break;
            }
        } else {
            continue;
        }

        console.log(
            `Paso ${count}) monsterHP: ${monsterHP}, playerHP: ${playerHP}`,
        );
        count++;
    }

    if (monsterHP <= 0 && playerHP <= 0) {
        console.log('Sorteo del juego');
        return;
    }

    if (monsterHP <= 0) {
        console.log(`Victoria del jugador. Quedan ${playerHP} puntos de vida`);
        return;
    }

    if (playerHP <= 0) {
        console.log(
            `Fracaso. Al monstruo le quedan ${monsterHP} puntos de vida.`,
        );
        return;
    }
};

rpgGame();
