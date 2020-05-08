import { Creature } from "./Creature";


/**
 * Player Entity
 */
/**
 * @param  {string} id
 * @param  {string} name
 * @param  {number} currentHitPoints
 * @param  {number} maximumHitPoints
 * @param  {{}} CurrentLocation
 * @param  {number} gold
 * @param  {number} experiencePoints
 * @param  {number} level
 * @param  {array} playerAttributes
 * @param  {array} PlayerQuestList
 * @param  {{}} SelectedWeapon
 * @param  {{}} playerNavigation
 * @param  {{}} fightLoop
 */
export class Player extends Creature {
    constructor(
        id,
        name,
        currentHitPoints,
        maximumHitPoints,
        CurrentLocation,
        gold,
        experiencePoints,
        level,
        playerAttributes,
        PlayerQuestList,
        SelectedWeapon,
        playerNavigation,
        fightLoop,
        inventory
    ) {
        super(id, name, currentHitPoints, maximumHitPoints, ...playerAttributes);
        this.gold = gold || 0;
        this.experiencePoints = experiencePoints || 0;
        this.level = level || 0;
        this.inventory = inventory;
        this.PlayerQuestList = PlayerQuestList
        this.SelectedWeapon = SelectedWeapon;
        this.CurrentLocation = CurrentLocation;
        this.player = this;
        this.playerNavigation = playerNavigation;
        this.fightLoop = fightLoop;
        this.attributeModified = false;
        this.modifiedAttributeName = "";
        this.currentlyFighting = false;
    }

    placeInInventory(Item) {
        if (!this.inventory) {
            this.inventory = [];
        }
        this.inventory.push(Item);
        return this;
    }

    getInventory() {
        return this.inventory;
    }
    /**
     * Use an item from your inventory
     * Perform a check to see what kind of item it is
     * According to the invoke the correct method for the item type.
     * 
     * @param {string} id 
     */
    useItemFromInventory(id) {
        // find the type of item
        this.getInventory().forEach((item, index) => {
            if (item.getId() === id) {
                if (item.type === "POTION") {
                }
                this.calculatePotionEffects(item, index);
            }
        });
        return this;
    }
    /**
     * Apply the potion effect based on the potion type.
     * 
     * @param  {{}} item
     * @param  {number} index
     */
    calculatePotionEffects(item, index) {
        if (
            item.getAttributeName() === "strength" ||
            item.getAttributeName() === "agility" ||
            item.getAttributeName() === "intellect" ||
            item.getAttributeName() === "currentHitPoints"
        ) {
            this.attributeModifiedName = item.getAttributeName();
            if (this.attributeModified === false || this.attributeModifiedName !== item.getAttributeName()) {
                console.log(super.addAttributeAmount(item.getAttributeName(), item.getAttributeValue()));
                this.attributeModified = true;
            } else {
                console.log("cannot modify an already modified attribute");
                return;
            }
            /**
             * sets the potion to take effect for 30 seconds
             */
            setTimeout(() => {
                console.log(`${item.name} wore off.`);
                super.subtractAttributeAmount(item.getAttributeName(), item.getAttributeValue());
                this.attributeModified = false;
                this.attributeModifiedName = "";
            }, 30000);
        }

        // delete the item after
        this.inventory = this.inventory.splice(index, 1);
        console.log(this.inventory);
    }

    setPlayerNav(nav) {
        this.playerNavigation = nav;
        return this;
    }

    setFightLoop(fightLoop) {
        this.fightLoop = fightLoop;
        return this;
    }

    getSelectedWeapon() {
        return this.SelectedWeapon;
    }

    getCurrentLocation() {
        this.CurrentLocation = this.playerNavigation.getLocation();
        return this.CurrentLocation;
    }

    setInventoryItem(item) {
        this.inventory.add(item);
        return this;
    }

    move(direction) {
        if (this.getCurrentlyFighting()) {
            console.log("can't move while fighting");
            return this;
        } else {
            this.CurrentLocation = this.playerNavigation.move(direction);
            return this;
        }
    }

    setPlayerQuest(quest) {
        this.PlayerQuestList.push(quest);
        return this;
    }

    setGold(amount) {
        this.gold = amount;
    }

    setExperiencePoints(points) {
        this.experiencePoints = points;
    }

    setLevel(level) {
        this.level = level;
    }

    getInventoryItems() {
        return this.inventory.listAll();
    }

    getQuests() {
        return this.PlayerQuestList;
    }

    getGold() {
        return this.gold;
    }

    getExperiencePoints() {
        return this.experiencePoints;
    }

    getLevel() {
        return this.level;
    }

    getQuestsRepository() {
        return this.PlayerQuestList;
    }

    getName() {
        return this.name;
    }

    getPlayer() {
        return this.player;
    }

    getCurrentlyFighting() {
        return this.currentlyFighting;
    }

    setCurrentlyFighting(bool) {
        this.currentlyFighting = bool;
        return this;
    }

    checkIfMonstersToFight() {
        // check if current location has monsters to fight
        const monsterToFight = this.getCurrentLocation().checkForMonster();
        if (monsterToFight) {
            this.fightLoop(this.getPlayer(), monsterToFight);
        } else {
            console.log("no monster to fight.");
        }
    }
}
