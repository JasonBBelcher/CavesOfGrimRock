/**
 * Fight Mechanics will be used inside a game loop to 
 * dynamically compare the stats of a player against a monster
 * to determine who gets to attack and the amount of damage delt
 * on each frame of the game loop.
 * 
 * @param  {class} Player
 * @param  {class} Monster
 */

export class FightMechanics {
  constructor(Player, Monster) {
    this.Player = Player;
    this.Monster = Monster;
    this.WhoAttacks = null;
    this.currentHit = 0;
  }

  fightTurn() {
    this.WhoAttacks = this.calculateAttacker();

    if (this.WhoAttacks === 'player') {
      // player rolls dice
      this.calculateDamageAmount('player');
    }

    if (this.WhoAttacks === 'monster') {
      // monster rolls dice

      this.calculateDamageAmount('monster');
    }
  }
  /**
   * @return {WhoAttacks}
   */
  calculateAttacker() {
    // compare agility of player vs monster and roll to attack.

    const playerSpeed = Math.floor(
      this.Player.getAgility() +
      this.Player.getSelectedWeapon().getWeaponSpeed() *
      (this.Player.getLevel() * 0.5)
    );

    const monsterSpeed = Math.floor(
      this.Monster.getAgility() +
      this.Monster.getSelectedWeapon().getWeaponSpeed() *
      (this.Monster.getLevel() * 0.5)
    );

    const playerRoll = this.calculateRandomNumber(0, playerSpeed);
    const monsterRoll = this.calculateRandomNumber(0, monsterSpeed);
    if (playerRoll >= monsterRoll) {
      return (this.WhoAttacks = 'player');
    } else {
      return (this.WhoAttacks = 'monster');
    }
  }
  /**
   * @param  {string} creature
   */
  calculateDamageAmount(creature) {
    if (creature === 'player') {
      let playerDamage = this.calculateRandomNumber(
        this.Player.getSelectedWeapon().getMinimumDamage(),
        this.Player.getSelectedWeapon().getMaximumDamage()
      );
      playerDamage = Math.floor(
        playerDamage + this.Player.getStrength() + this.Player.getLevel() ** 0.5
      );
      this.currentHit = playerDamage;
      this.Player.setCurrentHitPoints(playerDamage);
    }

    if (creature === 'monster') {
      let monsterDamage = this.calculateRandomNumber(
        this.Player.getSelectedWeapon().getMinimumDamage(),
        this.Player.getSelectedWeapon().getMaximumDamage()
      );
      monsterDamage = Math.floor(
        monsterDamage +
        this.Monster.getStrength() +
        this.Monster.getLevel() * 0.5
      );
      this.currentHit = monsterDamage;
      this.Monster.setCurrentHitPoints(monsterDamage);
    }

    if (this.WhoAttacks === 'player') {
      console.log(
        `${this.Player.getName()} hits ${this.Monster.getName()} for ${
        this.currentHit
        }`
      );
      console.log(`${this.Monster.getName()} misses ${this.Player.getName()}`);
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
  /**
   * @param  {number} min
   * @param  {number} max
   */
  calculateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
