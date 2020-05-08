/**
 * Loot Item
 */
import { Item } from "./Item";
/**
 * @param  {} uid
 * @param  {} type
 * @param  {} id
 * @param  {} name
 * @param  {} namePlural
 * @param  {} dropPercentage
 * @param  {} isDefaultItem
 * @param  {} attributeEffect
 * @param  {} {super(uid
 * @param  {} type
 * @param  {} id
 * @param  {} name
 * @param  {} namePlural
 * @param  {} attributeEffect
 */
export class LootItem extends Item {
  constructor(uid, type, id, name, namePlural, dropPercentage, isDefaultItem, attributeEffect) {
    super(uid, type, id, name, namePlural, attributeEffect);
    this.dropPercentage = dropPercentage;
    this.isDefaultItem = isDefaultItem || false;
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setNamePlural(namePlural) {
    this.namePlural = namePlural;
  }

  setDropPercentage(percentage) {
    this.dropPercentage = percentage;
  }

  setIsDefaultItem(bool) {
    this.isDefaultItem = bool || !this.isDefaultItem;
  }

  getId() {
    return this.id;
  }

  getDropPercentage() {
    return this.dropPercentage;
  }

  getIsDefaultItem() {
    return this.isDefaultItem;
  }
}
