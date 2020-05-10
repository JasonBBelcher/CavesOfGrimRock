import { Creature } from "./Creature";

/**
 * Player Entity
 *
 * @param  {} id
 * @param  {} name
 * @param  {} currentHitPoints
 * @param  {} maximumHitPoints
 * @param  {} CurrentLocation
 * @param  {} gold
 * @param  {} experiencePoints
 * @param  {} level
 * @param  {} playerAttributes
 * @param  {} PlayerQuestList
 * @param  {} SelectedWeapon
 * @param  {} playerNavigation
 * @param  {} fightLoop
 * @param  {} inventory
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
        this.PlayerQuestList = PlayerQuestList;
        this.SelectedWeapon = SelectedWeapon;
        this.CurrentLocation = CurrentLocation;
        this.player = this;
        this.playerNavigation = playerNavigation;
        this.fightLoop = fightLoop;
        this.attributeModified = false;
        this.modifiedAttributeName = '';
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

    useItemFromInventory(id) {
        // find the type of item 
        this.getInventory().forEach((item, index) => {
            if (item.getId() === id) {
                if (item.type === "POTION") {

                    // affect the attrib modifier
                    if (item.getAttributeName() === 'strength' ||
                        item.getAttributeName() === 'agility' ||
                        item.getAttributeName() === 'intellect'
                    ) {
                        this.attributeModifiedName = item.getAttributeName();
                        if (this.attributeModified === false || this.attributeModifiedName !== item.getAttributeName()) {
                            this.attributeModified = true;
                            console.log(super.addAttributeAmount(item.getAttributeName(), item.getAttributeValue()));

                        } else {
                            console.log('cannot modify an already modified attribute')
                            return;
                        }

                        setTimeout(() => {
                            console.log(`${item.name} wore off.`)
                            super.subtractAttributeAmount(item.getAttributeName(), item.getAttributeValue());
                            this.attributeModified = false;
                            this.attributeModifiedName = '';
                        }, 30000)
                    }
                }
                // delete the item after 
                this.inventory = this.inventory.splice(index, 1)
                console.log(this.inventory);
            }
        });
        return this;
    }
    /** sets the player navigation engine up that moves the player along the grid. */
    setPlayerNav(nav) {
        this.playerNavigation = nav;
        return this;
    }
    /** sets up the fightloop that runs when a monster is found in the room. */
    setFightLoop(fightLoop) {
        this.fightLoop = fightLoop;
        return this;
    }
    /** Get the currently selected weapon the player will fight with. */
    getSelectedWeapon() {
        return this.SelectedWeapon;
    }
    /** Gets the current location object on the map grid */
    getCurrentLocation() {
        this.CurrentLocation = this.playerNavigation.getLocation();
        return this.CurrentLocation;
    }
    /** Puts an item in the players backpack */
    setInventoryItem(item) {
        this.inventory.push(item);
        return this;
    }
    /** Move the player one room forward. North | East | South | West */
    move(direction) {
        if (this.getCurrentlyFighting()) {
            console.log('can\'t move while fighting');
            return this;
        } else {
            this.CurrentLocation = this.playerNavigation.move(direction);
            this.getCurrentLocation().setPlayerVisited();
            return this;
        }
    }
    /** adds a new quest object to the player. */
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
        return this.PlayerQuestList.listAll();
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
    /** get currently active quests. */
    getQuestsRepository() {
        return this.PlayerQuestList;
    }
    /** Get the name of the player */
    getName() {
        return this.name;
    }
    /** Get this player */
    getPlayer() {
        return this.player;
    }
    /** Is the player currently fighting a monster? */
    getCurrentlyFighting() {
        return this.currentlyFighting;
    }
    /** Set the player to be fighting a monster. */
    setCurrentlyFighting(bool) {
        this.currentlyFighting = bool;
        return this;
    }
    /**
     * When a player investigates the room there is a chance to fight
     * a monster 
     */
    checkIfMonstersToFight() {
        // check if current location has monsters to fight
        const monsterToFight = this.getCurrentLocation().checkForMonster();
        if (monsterToFight) {
            console.log('monster to fight: ', monsterToFight);
            /** Need to pass in current location to fight loop so that monster can be subtracted if killed. */
            this.fightLoop(this.getPlayer(), monsterToFight, this.getCurrentLocation());
        } else {
            console.log('no monster to fight.');
        }
    }

}
