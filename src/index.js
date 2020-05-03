import { Factory } from "./Engine/Config/Registry/Factory";
import * as registry from "./Engine/Config/Registry/RegisteredClasses";

const rustySword = Factory.construct(registry.default, "Weapon", "RUSTY_SWORD");
const rustySword2 = Factory.construct(registry.default, "Weapon", "RUSTY_SWORD");

console.log(rustySword, rustySword2);

const lesserHealingPotion = Factory.construct(registry.default, "HealingPotion", "LESSER_HEALING_POTION");
console.log(lesserHealingPotion);
const healingPotion = Factory.construct(registry.default, "HealingPotion", "HEALING_POTION");
console.log(healingPotion);