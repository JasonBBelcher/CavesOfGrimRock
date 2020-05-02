/**
 * Monster Repository
 */

import { BaseRepository } from "./BaseRepository";

export class MonsterRepository extends BaseRepository {
  add(Monster) {
    super.add(Monster.getId(), Monster);
    return this;
  }

  getMonster(id) {
    return super.find(id);
  }

  getMonsters() {
    return super.listAll();
  }
}
