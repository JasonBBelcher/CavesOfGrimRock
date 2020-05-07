import * as weapons from "../Weapons/weapons";
import * as healingPotions from "../HealingPotions/healingPotions";
import * as playerClasses from "../Player/players";
import * as monsters from "../Monsters/monsters";
import * as maps from "../Maps/maps";
const weaponList = weapons.default;
const healingPotionList = healingPotions.default;
const playerClassesList = playerClasses.default;
const monsterList = monsters.default;
const mapDict = maps.default;

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
                const potion = healingPotionList.filter(potion => potion.id === id)[0];
                return new registry[type](
                    potion.id,
                    potion.name,
                    potion.namePlural,
                    potion.amountToHeal
                );
            case 'Player':
                const player = playerClassesList.filter(player => player.id === id)[0];
                return new registry[type](
                    player.id,
                    player.name,
                    player.currentHitPoints,
                    player.maximumHitPoints,
                    player.gold,
                    player.experiencePoints,
                    player.level,
                    player.playerAttributes,
                    player.playerQuestList,
                    new registry['Weapon'](player.selectedWeapon.id,
                        player.selectedWeapon.name,
                        player.selectedWeapon.namePlural,
                        player.selectedWeapon.minimumDamage,
                        player.selectedWeapon.maximumDamage
                    )
                );
                break;
            case 'Monster':
                const monster = monsterList.filter(monster => monster.id === id)[0];
                return new registry[type](
                    monster.id,
                    monster.name,
                    monster.currentHitPoints,
                    monster.maximumHitPoints,
                    monster.maximumDamage,
                    monster.rewardExperiencePoints,
                    monster.rewardGold,
                    monster.monsterAttributes,
                    monster.lootTableList,
                    new registry['Weapon'](monster.selectedWeapon.id,
                        monster.selectedWeapon.name,
                        monster.selectedWeapon.namePlural,
                        monster.selectedWeapon.minimumDamage,
                        monster.selectedWeapon.maximumDamage
                    )
                );
        }
    }
}