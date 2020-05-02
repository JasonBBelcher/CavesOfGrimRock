/**
 * Healing Potion Entity
 */
import { Item } from "./Item";

export class HealingPotion extends Item {
  constructor(id, name, namePlural, amountToHeal) {
    super(id, name, namePlural);
    this.amountToHeal = amountToHeal || 0;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setNamePlural(namePlural) {
    this.namePlural = namePlural;
    return this;
  }

  setAmountToHeal(amountToHeal) {
    this.amountToHeal = amountToHeal;
    return this;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getNamePlural() {
    return this.namePlural;
  }

  getAmountToHeal() {
    return this.amountToHeal;
  }
}
