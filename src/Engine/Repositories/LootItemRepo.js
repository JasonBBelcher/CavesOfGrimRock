import { LootItem } from "../Entities/LootItem";
import { BaseRepository } from "./BaseRepository";

export class LootItemRepository extends BaseRepository {
  add(item, dropPercentage, isDefault) {
    super.add(item.getId(), new LootItem(item, dropPercentage, isDefault));
    return this;
  }

  getLootItems() {
    return super.listAll();
  }
}
