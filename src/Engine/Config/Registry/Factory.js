import * as weapons from "../Weapons/weapons";
import * as healingPotions from "../HealingPotions/HealingPotions";
const weaponList = weapons.default;
const healingPotionList = healingPotions.default;
/**
 * Singleton Factory that is responsible for creating all world objects in the game
 */
export const Factory = {
    /**
     * @param  {config object} registery
     * @param  {string} type
     * @param  {string} id
     */
    construct(registry, type, id) {
        switch (type) {
            case 'Weapon':
                const weapon = weaponList.filter(weapon => weapon.id === id)[0];
                return new registry[type](
                    weapon.id,
                    weapon.name,
                    weapon.namePlural,
                    weapon.minimumDamage,
                    weapon.maximumDamage,
                    weapon.weaponSpeed
                );
            case 'HealingPotion':
                const healingPotion = healingPotionList.filter(potion => potion.id === id);
                return new registry[type](
                    potion.id,
                    potion.name,
                    potion.namePlural,
                    potion.amountToHeal
                );
        }

    }
}