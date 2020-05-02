export class CreatureAttributes {
  constructor(strength, agility, intellect, mana) {
    this.strength = strength || 8;
    this.agility = agility || 8;
    this.intellect = intellect || 9;
    this.mana = mana || 50;
  }

  setStrength(amount) {
    this.strength = amount;
    return this;
  }

  setAgility(amount) {
    this.agility = amount;
    return this;
  }

  setIntellect(amount) {
    this.intellect = amount;
    return this;
  }

  setMana(mana) {
    this.mana = mana;
    return this;
  }

  getStrength() {
    return this.strength;
  }

  getAgility() {
    return this.agility;
  }

  getIntellect() {
    return this.intellect;
  }

  getMana() {
    return this.mana;
  }
}
