import * as weapons from "../Weapons/weapons";
import * as items from "../Items/Items";
import * as playerClasses from "../Player/players";
import * as monsters from "../Monsters/monsters";
import { LocationFactory } from "./LocationFactory";
const weaponList = weapons.default;
const itemList = items.default;
const playerClassesList = playerClasses.default;
const monsterList = monsters.default;

/**
 * Singleton Factory that is responsible for creating all world objects in the game
 */
export const Factory = {
    /**
     * @param  {function} registery
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
            case 'Item':
                let item = itemList.filter(item => item.id === id)[0];
                return new registry[type](
                    item.uid,
                    item.type,
                    item.id,
                    item.name,
                    item.namePlural,
                    item.attributeEffect,
                );
            case 'LootItem':
                item = itemList.filter(item => item.id === id)[0];
                return new registry[type](
                    item.uid,
                    item.type,
                    item.id,
                    item.name,
                    item.namePlural,
                    item.dropPercentage,
                    item.isDefault,
                    item.attributeEffect,
                );
            case 'Player':
                const player = playerClassesList.filter(player => player.id === id)[0];
                return new registry[type](
                    player.id,
                    player.name,
                    player.currentHitPoints,
                    player.maximumHitPoints,
                    player.CurrentLocation,
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
                    ),
                    registry['playerNavigation'](LocationFactory.construct(registry, 'map1')),
                    registry['fightLoop'],
                    player.inventory
                );

            case 'Monster':
                /** get the monster by id */
                const monster = monsterList.filter(monster => monster.id === id)[0];

                /** bag to collect the loot */
                const loot = [];
                /** While there are loot ids to collect. This algorithm is LIFO*/
                while (monster.loot.length) {
                    /** Starting from last index we know it's an item */
                    loot.push(Factory.construct(registry, 'Item', monster.loot.pop()));
                    /** looted weapon is always expected to be first index in loot array */
                    if (monster.loot.length === 1) {
                        /** get the index of the weapon giving back the string id  */
                        let weaponIndex = monster.loot.length - 1;
                        /** If it matches the monstes selectedWeapon we add it too the loot bag */
                        if (monster.loot[weaponIndex] === monster.selectedWeapon.id) {
                            loot.push(Factory.construct(registry, 'Weapon', monster.loot.pop()));
                        } else {
                            /** if there is no weapon to drop then just add a normal item. */
                            loot.push(Factory.construct(registry, 'Item', monster.loot.pop()));
                        }
                    }
                }

                return new registry[type](
                    monster.id,
                    monster.name,
                    monster.currentHitPoints,
                    monster.maximumHitPoints,
                    monster.maximumDamage,
                    monster.rewardExperiencePoints,
                    monster.rewardGold,
                    monster.monsterAttributes,
                    loot, /** see above to see how it gets populated */
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