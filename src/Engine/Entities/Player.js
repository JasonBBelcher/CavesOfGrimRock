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
    CurrentLocation,
    gold,
    experiencePoints,
    level,
    playerAttributes,
    PlayerQuestList,
    SelectedWeapon,
    playerNavigation
  ) {
    super(id, name, currentHitPoints, maximumHitPoints, ...playerAttributes);
    this.gold = gold || 0;
    this.experiencePoints = experiencePoints || 0;
    this.level = level || 0;
    this.inventory = new InventoryRepository();
    this.PlayerQuestList = PlayerQuestList || new PlayerQuestsRepository();
    this.SelectedWeapon = SelectedWeapon;
    this.playerNavigation = playerNavigation;
    this.CurrentLocation = CurrentLocation;
  }

  getSelectedWeapon() {
    return this.SelectedWeapon;
  }

  getCurrentLocation() {
    this.currentLocation = this.playerNavigation.getLocation();
    return this.currentLocation;
  }

  setInventoryItem(item) {
    this.inventory.add(item);
    return this;
  }

  setNewLocation(direction) {
    this.currentLocation = this.playerNavigation.move(direction);
    return this;
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
