import { Item } from "./Item";
/**
 * Weapon
 */

export class Weapon extends Item {
  constructor(id, name, namePlural, minimumDamage, maximumDamage, weaponSpeed) {
    super(id, name, namePlural);
    this.minimumDamage = minimumDamage || 1;
    this.maximumDamage = maximumDamage || 4;
    this.weaponSpeed = weaponSpeed || 2;
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
