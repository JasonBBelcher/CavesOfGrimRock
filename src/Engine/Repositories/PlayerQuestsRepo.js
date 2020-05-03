import { PlayerQuest } from "../Entities/PlayerQuest";
import { BaseRepository } from "./BaseRepository";

export class PlayerQuestsRepository extends BaseRepository {
  /**
   * @param  {Quest} Quest 
   * @return {PlayerQuestsRepository} 
   */
  add(quest) {
    super.add(quest.getId(), new PlayerQuest(quest));
    return this;
  }
}
