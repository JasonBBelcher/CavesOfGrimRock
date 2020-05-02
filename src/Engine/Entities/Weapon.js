import { Item } from "./Item";
/**
 * Weapon
 */

export class Weapon extends Item {
  constructor(id, name, namePlural, minimumDamage, maximumDamage, weaponSpeed) {
    super(id, name, namePlural);
    this.minimumDamage = minimumDamage;
    this.maximumDamage = maximumDamage;
    this.weaponSpeed = weaponSpeed || 5;
  }

  setMinimumDamage(minDamage) {
    this.minimumDamage = minDamage;
    return this;
  }

  setMaximumDamage(maxDamage) {
    this.maximumDamage = maxDamage;
    return this;
  }
  getMinimumDamage() {
    return this.minimumDamage;
  }

  getMaximumDamage() {
    return this.maximumDamage;
  }

  getWeaponSpeed() {
    return this.weaponSpeed;
  }
}
