import { Creature } from "./Creature";
import { PlayerQuestsRepository } from "../Repositories/PlayerQuestsRepo";

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
    playerNavigation,
    fightLoop,
    inventory
  ) {
    super(id, name, currentHitPoints, maximumHitPoints, ...playerAttributes);
    this.gold = gold || 0;
    this.experiencePoints = experiencePoints || 0;
    this.level = level || 0;
    this.inventory = inventory;
    this.PlayerQuestList = PlayerQuestList || new PlayerQuestsRepository();
    this.SelectedWeapon = SelectedWeapon;
    this.CurrentLocation = CurrentLocation;
    this.player = this;
    this.playerNavigation = playerNavigation;
    this.fightLoop = fightLoop;
    this.attributeModified = false;
    this.modifiedAttributeName = '';
    this.currentlyFighting = false;
  }

  placeInInventory(Item) {
    if (!this.inventory) {
      this.inventory = [];
    }
    this.inventory.push(Item);
    return this;
  }

  getInventory() {
    return this.inventory;
  }

  useItemFromInventory(id) {
    // find the type of item 
    this.getInventory().forEach((item, index) => {
      if (item.getId() === id) {
        if (item.type === "POTION") {

          // affect the attrib modifier
          if (item.getAttributeName() === 'strength' ||
            item.getAttributeName() === 'agility' ||
            item.getAttributeName() === 'intellect'
          ) {
            this.attributeModified = true;
            this.attributeModifiedName = item.getAttributeName();
            if (this.attributeModified === false || this.attributeModifiedName !== item.getAttributeName()) {
              console.log(super.addAttributeAmount(item.getAttributeName(), item.getAttributeValue()));

            } else {
              console.log('cannot modify an already modified attribute')
              return;
            }

            setTimeout(() => {
              console.log(`${item.name} wore off.`)
              super.subtractAttributeAmount(item.getAttributeName(), item.getAttributeValue());
              this.attributeModified = false;
              this.attributeModifiedName = '';
            }, 30000)
          }
        }
        // delete the item after 
        this.inventory = this.inventory.splice(index, 1)
        console.log(this.inventory);
      }
    });
    return this;
  }

  setPlayerNav(nav) {
    this.playerNavigation = nav;
    return this;
  }

  setFightLoop(fightLoop) {
    this.fightLoop = fightLoop;
    return this;
  }

  getSelectedWeapon() {
    return this.SelectedWeapon;
  }

  getCurrentLocation() {
    this.CurrentLocation = this.playerNavigation.getLocation();
    return this.CurrentLocation;
  }

  setInventoryItem(item) {
    this.inventory.add(item);
    return this;
  }

  move(direction) {
    if (this.getCurrentlyFighting()) {
      console.log('can\'t move while fighting');
      return this;
    } else {
      this.CurrentLocation = this.playerNavigation.move(direction);
      return this;
    }
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

  getPlayer() {
    return this.player;
  }

  getCurrentlyFighting() {
    return this.currentlyFighting;
  }

  setCurrentlyFighting(bool) {
    this.currentlyFighting = bool;
    return this;
  }

  checkIfMonstersToFight() {
    // check if current location has monsters to fight
    const monsterToFight = this.getCurrentLocation().checkForMonster();
    if (monsterToFight) {
      this.fightLoop(this.getPlayer(), monsterToFight)
    } else {
      console.log('no monster to fight.');
    }
  }

}
