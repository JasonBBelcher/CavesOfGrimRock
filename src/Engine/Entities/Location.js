/**
 * Location Entity
 */
/**
 * @param  {} id
 * @param  {} name
 * @param  {} description
 * @param  {} ItemRequiredToEnter
 * @param  {} hasAMonster
 * @param  {} MonstersAtLocation
 * @param  {} playerVisited
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
    this.monsterIndex = 0;
    this.playerVisted = playerVisited
  }

  checkForMonster() {
    this.monsterIndex = randomNumber(0, this.MonstersAtLocation.length);
    if (this.MonstersAtLocation.length > 0) {
      // roll to see if monster appears
      let roll = randomNumber(1, 6);

      if (roll === 5) {
        // roll again to pick a random monster
        this.monsterInFight = this.MonstersAtLocation[this.monsterIndex];
      }

      return this.monsterInFight;
    }
  }

  setPlayerVisited() {
    this.playerVisted = true;
  }
  /** Returns monster currently in fight with player 
   * @returns Monster object
  */
  getMonsterInFight() {
    return this.monsterInFight;
  }
  /**
   * When a fight is won by player remove the monster from the
   * current room. 
   * @returns void
   */
  removeMonster() {
    this.MonstersAtLocation.splice(this.getMonsterInFight(), 1);
    if (!this.MonstersAtLocation.length) {
      this.hasAMonster = false;
    }
    console.log('monster killed!', this.getMonsterInFight());
    this.monsterInFight = null;
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
