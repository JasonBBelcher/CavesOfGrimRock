/**
 * Creature Entity
 */

import { CreatureAttributes } from "./CreatureAttributes";

export class Creature extends CreatureAttributes {
  constructor(
    id,
    name,
    currentHitPoints,
    maximumHitPoints,
    strength,
    agility,
    intellect,
    mana
  ) {
    super(strength, agility, intellect, mana);
    this.id = id;
    this.name = name;
    this.currentHitPoints = currentHitPoints || 0;
    this.maximumHitPoints = maximumHitPoints || 0;
  }

  setCurrentHitPoints(points) {
    this.currentHitPoints = this.currentHitPoints - points;
  }

  setMaximumHitPoints(points) {
    this.maximumHitPoints = points;
  }

  getCurrentHitPoints() {
    return this.currentHitPoints;
  }

  getMaximumHitPoints() {
    return this.maximumHitPoints;
  }
}
