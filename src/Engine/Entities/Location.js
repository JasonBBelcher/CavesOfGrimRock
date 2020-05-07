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
    this.playerVisted = playerVisited
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
