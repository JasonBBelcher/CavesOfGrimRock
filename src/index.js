// bootstrap it all here

import { PlayerQuestsRepository } from "./Engine/Repositories/PlayerQuestsRepo";
import { Quest } from "./Engine/Entities/Quest";
import { Item } from "./Engine/Entities/Item";
import { QuestCompletionRepository } from "./Engine/Repositories/QuestCompletionRepo";
import { Player } from "./Engine/Entities/Player";
import { Monster } from "./Engine/Entities/Monster";
import { LootItemRepository } from "./Engine/Repositories/LootItemRepo";
import { MonsterRepository } from "./Engine/Repositories/MonsterRepository";
import { FightMechanics } from "./Engine/FightMechanics";

const playerQuestRepo = new PlayerQuestsRepository();
playerQuestRepo.add(
  new Quest(
    "QUEST_1",
    "the first quest",
    "This is a test description",
    20,
    200,
    new Item("STRENGTH_POTION", "A strength potion", "Strength Potions"),
    new QuestCompletionRepository()
      .add(new Item("SNAKE_SKIN", "A snake skin", "snake skins"), 4)
      .add(new Item("SNAKE_SKIN2", "A snake skin", "snake skins"), 2)
  )
);

console.log(
  playerQuestRepo
    .find("QUEST_1")
    .getQuest()
    .getQuestCompletionItems()
    .getQuestItems()
);

const player = new Player("JASON", "Jason Belcher", 500, 500, 20, 0, 3, [
  20,
  14,
  16,
  100
]).setPlayerQuest(
  new Quest(
    "QUEST_1",
    "the first quest",
    "This is a test description",
    20,
    200,
    new Item("STRENGTH_POTION", "A strength potion", "Strength Potions"),
    new QuestCompletionRepository()
      .add(new Item("SNAKE_SKIN", "A snake skin", "snake skins"))
      .add(new Item("SNAKE_SKIN2", "A snake skin", "snake skins"))
  )
);

console.log(player);

const monster = new Monster(
  "ICE_GOBLIN",
  "An Ice Goblin",
  100,
  100,
  20,
  1,
  20,
  [20, 12, 8, 80],
  new LootItemRepository().add(
    new Item("ICE_SWORD", "An Ice Magic Sword", "Ice Swords"),
    5,
    false
  )
).setLootTableItem(
  new Item(
    "ICE_PROTECTION_AMULET",
    "A Shining Magical Amulet of ice!",
    "Ice Ameluts"
  ),
  25,
  true
);
console.log(monster.getLootTableItems());

const monsterRepo = new MonsterRepository().add(monster);
console.log(monsterRepo.getMonsters());

const fight = new FightMechanics(player, monster);

console.log(fight);
fight.fightTurn();
