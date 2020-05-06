import { Factory } from "./Engine/Config/Registry/Factory";
import * as registry from "./Engine/Config/Registry/RegisteredClasses";

/** User new Factory and Registry to instantiate 2 opponents */

const player = Factory.construct(registry.default, "Player", "FIGHTER");
const monster = Factory.construct(registry.default, "Monster", "LOWER_GOBLIN_SCOUT");


// test the gameloop
// let fightLoop = require('./Engine/FightLoop');
// fightLoop = fightLoop();
// console.log(fightLoop(player, monster));


// testing traversal of map 

const createMap = (size) => {
    const mapBoard = [];
    for (let i = 0; i < size; i++) {
        mapBoard.push(`rm${i}`)
    }
    return mapBoard;
}

const genMap = createMap(64);
console.log(genMap);



const map = [
    'rm1', 'rm2', 'rm3', '###',
    '###', '###', 'rm4', 'rm5',
    'rm11', '###', '###', 'rm6',
    'rm10', 'rm9', 'rm8', 'rm7',
]



let playerIndex = 0;
let east = 1;
let west = 1;
let south = 4;
let north = 4;
let eastBounds = 3;
let westBounds = 0;
let northBound = 0;
let southBound = 15;

function whereAmI() {
    return console.log(map[playerIndex]);
}

function move(direction) {
    if (direction === 'east' && eastBounds > 0) {

        playerIndex += east;
        if (map[playerIndex] === "###") {
            playerIndex -= west;
            console.log('You can\'t go that way!');
            return;
        }

        console.log(map[playerIndex]);
        eastBounds--;
        westBounds++;

    }

    if (direction === 'west' && westBounds > 0) {
        playerIndex -= west;
        if (map[playerIndex] === "###") {
            playerIndex += east;
            console.log('You can\'t go that way!');
            return;
        }

        console.log(map[playerIndex]);
        eastBounds++;
        westBounds--;


    }
    if (direction === 'south' && southBound > 0) {
        playerIndex += south;
        if (map[playerIndex] === "###") {
            playerIndex -= north;
            console.log('You can\'t go that way!');
            return;
        }
        console.log(map[playerIndex]);
        southBound -= 4;
        northBound += 4;


    }
    if (direction === 'north' && northBound > 0) {
        playerIndex -= north;
        if (map[playerIndex] === "###") {
            playerIndex += south;
            console.log('You can\'t go that way!');
            return;
        }
        console.log(map[playerIndex]);
        southBound += 4;
        northBound -= 4;


    }

}
whereAmI();
move('east');
move('east');
move('south');
move('south');
move('east');
