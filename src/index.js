import { Factory } from "./Engine/Config/Registry/Factory";
import * as registry from "./Engine/Config/Registry/RegisteredClasses";

/** User new Factory and Registry to instantiate 2 opponents */

const player = Factory.construct(registry.default, "Player", "FIGHTER");
const monster = Factory.construct(registry.default, "Monster", "LOWER_GOBLIN_SCOUT");


// test the gameloop
// let fightLoop = require('./Engine/FightLoop');
// fightLoop = fightLoop();
// console.log(fightLoop(player, monster));


// testing random map node generation. 
import { randomMapNodeGenerator } from "./Engine/Config/Registry/GenerateMapNodes";

let mapPath1 = randomMapNodeGenerator.createNodes('North', 'Northeast');
let mapPath2 = randomMapNodeGenerator.createNodes('South', 'Southwest');
let mapPath3 = randomMapNodeGenerator.createNodes('South', 'Southeast');
let mapPath4 = randomMapNodeGenerator.createNodes('North', 'Northwest');



let result1 = mapPath1(4);
let result2 = mapPath2(4);
let result3 = mapPath3(4);
let result4 = mapPath4(4);

randomMapNodeGenerator.getAllLocations()(result1);
randomMapNodeGenerator.getAllLocations()(result2);
randomMapNodeGenerator.getAllLocations()(result3);
randomMapNodeGenerator.getAllLocations()(result4);




console.log(randomMapNodeGenerator.getLocationNodes());