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

  calculateHitChance() {
    // compare player vs monster agility + weapon speed stats and calculate hit chance
  }

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
    // compare player vs monster strength + selected weapon damage and calculate damage

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

  calculateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
