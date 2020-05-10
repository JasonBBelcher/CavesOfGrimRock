import { Factory } from "./Engine/Config/Registry/Factory";
import * as registry from "./Engine/Config/Registry/RegisteredClasses";

// // load the map into player navigation.
// const player = Factory.construct(registry.default, "Player", "FIGHTER");

// player.move('east');
// console.log(player.checkIfMonstersToFight())
// // // check that a player can't move once a fight has started

// const potion = Factory.construct(registry.default, "Item", 'STRENGTH_POTION');
// const potion2 = Factory.construct(registry.default, "Item", 'STRENGTH_POTION');

// console.log(player.placeInInventory(potion));
// player.placeInInventory(potion2).useItemFromInventory('STRENGTH_POTION');


// testing monster factory for populating loot to drop when monster is killed.
const monster = Factory.construct(registry.default, "Monster", "LOWER_GOBLIN_SCOUT")
const monster2 = Factory.construct(registry.default, "Monster", "GOBLIN_WARRIOR")

console.log(monster);
console.log(monster2);

