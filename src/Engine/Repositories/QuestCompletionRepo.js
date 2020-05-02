import { QuestCompletionItem } from "../Entities/QuestCompletionItem";
import { BaseRepository } from "./BaseRepository";

export class QuestCompletionRepository extends BaseRepository {
  add(item, quantity) {
    super.add(item.getId(), new QuestCompletionItem(item, quantity));
    return this;
  }

  getQuestItems() {
    return super.listAll();
  }
}
