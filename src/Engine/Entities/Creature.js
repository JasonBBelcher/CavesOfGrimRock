/**
 * Creature Entity
 */

import { CreatureAttributes } from "./CreatureAttributes";
/**
 * @param  {} id
 * @param  {} name
 * @param  {} currentHitPoints
 * @param  {} maximumHitPoints
 * @param  {} strength
 * @param  {} agility
 * @param  {} intellect
 * @param  {} mana
 * @param  {} {super(strength
 * @param  {} agility
 * @param  {} intellect
 * @param  {} mana
 */
export class Creature extends CreatureAttributes {
    constructor(id, name, currentHitPoints, maximumHitPoints, strength, agility, intellect, mana) {
        super(strength, agility, intellect, mana);
        this.id = id;
        this.name = name;
        this.currentHitPoints = currentHitPoints || 50;
        this.maximumHitPoints = maximumHitPoints || 50;
    }

    addAttributeAmount(name, value) {
        if (name === "currentHitPoints") {
            this[name] += value;
        } else {
            super.addAttributeAmount(name, value);
        }
    }

    subtractAttributeAmount(name, value) {
        if (name === "currentHitPoints") {
            this[name] -= value;
        } else {
            super.subtractAttributeAmount(name, value);
        }
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
