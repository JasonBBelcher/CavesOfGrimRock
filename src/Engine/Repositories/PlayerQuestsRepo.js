import { PlayerQuest } from "../Entities/PlayerQuest";
import { BaseRepository } from "./BaseRepository";

export class PlayerQuestsRepository extends BaseRepository {
  add(quest) {
    super.add(quest.getId(), new PlayerQuest(quest));
  }
}
