/**
 * Fight Mechanics will be used inside a game loop to 
 * dynamically compare the stats of a player against a monster
 * to determine who gets to attack and the amount of damage delt
 * on each frame of the game loop.
 * 
 * @param  {class} Player player object
 * @param  {class} Monster monster object
 * @param {class} Location location object
 */

export class FightMechanics {
  /** Refactor to accept a location so that a monster can be subtracted
   *  from monster list at that location 
   * 
   *  @param {object} Player player object
   *  @param {object} Monster monster object
   *  @param {object} Location location object
   * */
  constructor(Player, Monster, Location) {
    this.Player = Player;
    this.Monster = Monster;
    this.Location = Location;
    this.WhoAttacks = null;
    this.currentHit = 0;
    this.timer = null;
    this.currentlyFighting = false;
  }
  /**
   * @param  {setInterval} timer
   */
  setTimer(timer) {
    this.timer = timer;
  }
  /** Clear the interval and end the fight. */
  stopTimer() {
    clearInterval(this.timer);
  }
  /** Get Player object */
  getPlayer() {
    return this.Player;
  }
  /** Get Monster object */
  getMonster() {
    return this.Monster;
  }
  /** Get Location object
   * @returns Location object
   * 
   */
  getLocation() {
    return this.Location;
  }

  /** Roll the dice  */
  fightTurn() {
    this.getPlayer().setCurrentlyFighting(true);
    this.WhoAttacks = this.calculateAttacker();
    this.calculateDamageAmount();
  }
  /**
   * Calculate who hits and who misses
   * 
   * @return {WhoAttacks}
   */
  calculateAttacker() {

    /**
     * Get player speed from agility and selected weapon speed
     */
    const playerSpeed = Math.floor(
      this.getPlayer().getAgility() +
      this.getPlayer().getSelectedWeapon().getWeaponSpeed() *
      (this.getPlayer().getLevel() * 0.5)
    );
    /**
     * Get monster speed from agility and selected weapon speed
     */
    const monsterSpeed = Math.floor(
      this.getMonster().getAgility() +
      this.getMonster().getSelectedWeapon().getWeaponSpeed() *
      (this.getMonster().getLevel() * 0.5)
    );
    /**
     * Take the calculation for player speed and roll dice to see if 
     * they miss or attack for some damage
     */
    const playerRoll = this.calculateRandomNumber(0, playerSpeed);
    /**
     * Take the calculation for monster speed and roll dice to see if 
     * they miss or attack for some damage
     */
    const monsterRoll = this.calculateRandomNumber(0, monsterSpeed);
    /** Check which one hits and slighty favor the player. */
    if (playerRoll >= monsterRoll) {
      return (this.WhoAttacks = 'player');
    } else {
      return (this.WhoAttacks = 'monster');
    }

  }
  /**
   * Calculate damage amount for player or monster based
   * on who won the attack roll
   * 
   * @param  {string} creature
   */
  calculateDamageAmount() {
    console.log(this.Player);
    if (this.WhoAttacks === 'player') {

      /** Calculate based on min and max damage set on player object */

      let playerDamage = this.calculateRandomNumber(
        this.getPlayer().getSelectedWeapon().getMinimumDamage(),
        this.getPlayer().getSelectedWeapon().getMaximumDamage()
      );

      /**Modify damage based on level and strength */

      playerDamage = Math.floor(
        playerDamage + this.Player.getStrength() + this.Player.getLevel() * 0.5
      );
      this.currentHit = playerDamage;
      this.getMonster().setCurrentHitPoints(playerDamage);
    }

    if (this.WhoAttacks === 'monster') {

      /** Calculate based on min and max damage set on player object */

      let monsterDamage = this.calculateRandomNumber(
        this.getMonster().getSelectedWeapon().getMinimumDamage(),
        this.getMonster().getSelectedWeapon().getMaximumDamage()
      );

      /** Modify damage based on level and strength */

      monsterDamage = Math.floor(
        monsterDamage +
        this.getMonster().getStrength() +
        this.getMonster().getLevel() * 0.5
      );

      this.currentHit = monsterDamage;
      this.Player.setCurrentHitPoints(monsterDamage);
    }
    /** Report the results of rolls */
    if (this.WhoAttacks === 'player') {
      console.log(
        `${this.getPlayer().getName()} hits ${this.getMonster().getName()} for ${
        this.currentHit
        } points!`
      );
      console.log(`${this.getMonster().getName()} misses ${this.getPlayer().getName()}`);
    }
    if (this.WhoAttacks === 'monster') {
      console.log(
        `${this.Monster.getName()} hits ${this.Player.getName()} for ${
        this.currentHit
        } points!`
      );
      console.log(`${this.Player.getName()} misses ${this.Monster.getName()}`);
    }
  }
  /** Used by Game Loop to check if fight needs to end due to either the player or monster dying. */
  checkFightEnded() {

    if (this.getPlayer().getCurrentHitPoints() <= 0) {
      this.getPlayer().setCurrentlyFighting(false);
      console.log(`${this.getPlayer().getName()} died!`)
      this.stopTimer();
      return;
    }
    if (this.getMonster().getCurrentHitPoints() <= 0) {
      this.getPlayer().setCurrentlyFighting(false);
      console.log(`${this.getPlayer().getName()} killed the nasty ${this.getMonster().getName()}!`);
      this.stopTimer();
      this.getLocation().removeMonster()
      return;
    }
  }

  isFighting() {
    return this.currentlyFighting;
  }
  /**
   * @param  {number} min
   * @param  {number} max
   */
  calculateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
