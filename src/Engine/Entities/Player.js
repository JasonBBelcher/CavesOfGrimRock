import { Creature } from "./Creature";
import { PlayerQuestsRepository } from "../Repositories/PlayerQuestsRepo";
import { InventoryRepository } from "../Repositories/InventoryRepo";
import { Weapon } from "./Weapon";

/**
 * Player Entity
 */
export class Player extends Creature {
  constructor(
    id,
    name,
    currentHitPoints,
    maximumHitPoints,
    gold,
    experiencePoints,
    level,
    playerAttributes = [],
    PlayerQuestList,
    SelectedWeapon
  ) {
    super(id, name, currentHitPoints, maximumHitPoints, ...playerAttributes);
    this.CurrentLocation = null;
    this.gold = gold || 0;
    this.experiencePoints = experiencePoints || 0;
    this.level = level || 0;
    this.inventory = new InventoryRepository();
    this.PlayerQuestList = PlayerQuestList || new PlayerQuestsRepository();
    this.SelectedWeapon =
      new Weapon("RUSTY_SWORD", "A rusty dull sword", "Rusty swords", 4, 10) ||
      SelectedWeapon;
  }

  getSelectedWeapon() {
    return this.SelectedWeapon;
  }

  setCurrentLocation(location) {
    this.CurrentLocation = location;
    return this;
  }

  getCurrentLocation() {
    return this.CurrentLocation;
  }

  setInventoryItem(item) {
    this.inventory.add(item);
  }

  setPlayerQuest(quest) {
    this.PlayerQuestList.add(quest);
    return this;
  }

  setGold(amount) {
    this.gold = amount;
  }

  setExperiencePoints(points) {
    this.experiencePoints = points;
  }

  setLevel(level) {
    this.level = level;
  }

  getInventoryItems() {
    return this.inventory.listAll();
  }

  getQuests() {
    return this.PlayerQuestList.listAll();
  }

  getGold() {
    return this.gold;
  }

  getExperiencePoints() {
    return this.experiencePoints;
  }

  getLevel() {
    return this.level;
  }

  getQuestsRepository() {
    return this.PlayerQuestList;
  }

  getName() {
    return this.name;
  }
}
