/**
 * Location Entity
 */

export class Location {
  constructor(
    id,
    name,
    description,
    ItemRequiredToEnter,
    hasAMonster,
    MonstersAtLocation,
    playerVisited
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ItemRequiredToEnter = ItemRequiredToEnter;
    this.hasAMonster = hasAMonster;
    this.MonstersAtLocation = MonstersAtLocation;
    this.monsterInFight = null;
    this.playerVisted = playerVisited
  }

  checkForMonster() {
    if (this.MonstersAtLocation.length > 0) {

      this.monsterInFight = this.MonstersAtLocation[randomNumber(0, this.MonstersAtLocation.length)]
      return this.monsterInFight;

    } else {
      this.monsterInFight = this.MonstersAtLocation.pop();
      return this.monsterInFight;
    }
  }

  monsterDeath() {
    this.MonstersAtLocation.splice(this.monsterInFight, 1);
    if (!this.MonstersAtLocation.length) {
      this.hasAMonster = false;
    }
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setItemRequiredToEnter(Item) {
    this.ItemRequiredToEnter = Item;
    return this;
  }

  setQuestAvailableHere(Quest) {
    this.QuestAvailableHere = Quest;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getItemRequiredToEnter() {
    return this.ItemRequiredToEnter;
  }

  getMonstersAtLocation() {
    return this.MonstersAtLocation;
  }

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
