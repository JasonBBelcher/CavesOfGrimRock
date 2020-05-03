/**
 * Monster Repository
 */

import { BaseRepository } from "./BaseRepository";

export class MonsterRepository extends BaseRepository {
  /**
   * @param  {Monster} Monster
   * @return {MonsterRepository}
   */
  add(monster) {
    super.add(monster.getId(), monster);
    return this;
  }
  /**
   * @param  {string} id
   */
  getMonster(id) {
    return super.find(id);
  }

  getMonsters() {
    return super.listAll();
  }
}
