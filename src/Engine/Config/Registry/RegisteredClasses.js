import { Player } from "../../Entities/Player";
import { Monster } from "../../Entities/Monster";
import { Weapon } from "../../Entities/Weapon";
import { Location } from "../../Entities/Location";
import { LootItem } from "../../Entities/LootItem";
import { PlayerQuest } from "../../Entities/PlayerQuest";
import { Quest } from "../../Entities/Quest";
import { QuestCompletionItem } from "../../Entities/QuestCompletionItem";
import { Item } from "../../Entities/Item";
import { HealingPotion } from "../../Entities/HealingPotion";
import { InventoryItem } from "../../Entities/InventoryItem";
import { FightMechanics } from "../../FightMechanics";
import { playerNavigation } from "../../PlayerNavigation";
let fightLoop = require('../../FightLoop');
/**
 * A Simple Dictionary registry of all world class entities to be used in the game.
 */
export default
    {
        "Player": Player,
        "Monster": Monster,
        "Weapon": Weapon,
        "Location": Location,
        "LootItem": LootItem,
        "PlayerQuest": PlayerQuest,
        "Quest": Quest,
        "QuestCompletionItem": QuestCompletionItem,
        "InventoryItem": InventoryItem,
        "Item": Item,
        "HealingPotion": HealingPotion,
        "playerNavigation": playerNavigation,
        "fightLoop": fightLoop()
    }