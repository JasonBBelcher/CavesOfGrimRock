/**
 * Monster Entity
 */

import { Creature } from "./Creature";

export class Monster extends Creature {
  constructor(
    id,
    name,
    currentHitPoints,
    maximumHitPoints,
    maximumDamage,
    rewardExperiencePoints,
    rewardGold,
    monsterAttributes,
    loot,
    SelectedWeapon
  ) {
    super(id, name, currentHitPoints, maximumHitPoints, ...monsterAttributes);
    this.maximumDamage = maximumDamage;
    this.rewardExperiencePoints = rewardExperiencePoints;
    this.rewardGold = rewardGold;
    this.loot = loot || [];
    this.SelectedWeapon = SelectedWeapon;
  }

  getLevel() {
    return 1;
  }

  getSelectedWeapon() {
    return this.SelectedWeapon;
  }

  setLootTableItem(LootItem) {
    this.loot.push(LootItem)
    return this;
  }

  getLootTableItems() {
    return this.LootTableList;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setMaximumDamage(maximumDamage) {
    this.maximumDamage = maximumDamage;
    return this;
  }

  setRewardExperiencePoints(rewardExperiencePoints) {
    this.rewardExperiencePoints = rewardExperiencePoints;
    return this;
  }

  setRewardGold(rewardGold) {
    this.rewardGold = rewardGold;
    return this;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getMaximumDamage() {
    return this.maximumDamage;
  }

  getRewardExperiencePoints() {
    return this.rewardExperiencePoints;
  }

  getRewardGold() {
    return this.rewardGold;
  }
}
