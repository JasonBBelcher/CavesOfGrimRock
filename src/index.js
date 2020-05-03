import { Factory } from "./Engine/Config/Registry/Factory";
import * as registry from "./Engine/Config/Registry/RegisteredClasses";

/** User new Factory and Registry to instantiate 2 opponents */

const player = Factory.construct(registry.default, "Player", "FIGHTER");
const monster = Factory.construct(registry.default, "Monster", "LOWER_GOBLIN_SCOUT");


// test the gameloop
let fightLoop = require('./Engine/FightLoop');
fightLoop = fightLoop();
console.log(fightLoop(player, monster));