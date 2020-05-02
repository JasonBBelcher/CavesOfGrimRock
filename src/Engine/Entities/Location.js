/**
 * Location Entity
 */

export class Location {
  constructor(
    id,
    name,
    description,
    ItemRequiredToEnter,
    QuestAvailableHere,
    hasAMonster,
    LocationToNorth,
    LocationToEast,
    LocationToSouth,
    LocationToWest
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ItemRequiredToEnter = ItemRequiredToEnter;
    this.QuestAvailableHere = QuestAvailableHere;
    this.hasAMonster = hasAMonster;
    this.MonstersAtLocation = new MonsterRepository();
    this.LocationToNorth = LocationToNorth;
    this.LocationToEast = LocationToEast;
    this.LocationToSouth = LocationToSouth;
    this.LocationToWest = LocationToWest;
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

  getQuestAvailableHere() {
    return this.QuestAvailableHere;
  }

  getMonsterLivingHere() {
    return this.MonsterLivingHere;
  }

  getLocationToNorth() {
    return this.LocationToNorth;
  }

  getLocationToEast() {
    return this.LocationToEast;
  }

  getLocationToSouth() {
    return this.LocationToSouth;
  }

  getLocationToWest() {
    return this.LocationToWest;
  }
}
