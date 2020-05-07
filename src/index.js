import { Factory } from "./Engine/Config/Registry/Factory";
import * as registry from "./Engine/Config/Registry/RegisteredClasses";
import * as mapData from "./Engine/Config/Maps/maps";
import { LocationFactory } from "./Engine/Config/Maps/LocationFactory";
import { playerNavigation } from "./Engine/PlayerNavigation";
const maps = mapData.default;
/** User new Factory and Registry to instantiate 2 opponents */

// const player = Factory.construct(registry.default, "Player", "FIGHTER");
// const monster = Factory.construct(registry.default, "Monster", "LOWER_GOBLIN_SCOUT");
// console.log(monster);
// console.log(player);

// // test the gameloop
// let fightLoop = require('./Engine/FightLoop');
// fightLoop = fightLoop();
// console.log(fightLoop(player, monster));


//  test random location generation.

const populatedMap = LocationFactory.construct(registry.default, "map1");
const playerNav = playerNavigation(populatedMap);
console.log(playerNav.getLocation());
playerNav.move('east');
playerNav.move('east');
playerNav.move('south');
