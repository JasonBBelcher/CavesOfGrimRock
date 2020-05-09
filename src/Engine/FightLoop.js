import { FightMechanics } from "./FightMechanics";
/**
 * When a fight with a monster is triggered start the game loop.
 */
const gameLoop = function () {
    return (Player, Monster, Location) => {
        const fight = new FightMechanics(Player, Monster, Location);
        fight.fightTurn();
        fight.checkFightEnded();

        self = setInterval(function () {
            fight.fightTurn();
            fight.checkFightEnded();
        }, 1000)

        fight.setTimer(self);
    }
}

module.exports = gameLoop;

