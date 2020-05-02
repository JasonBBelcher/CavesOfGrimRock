import { BaseRepository } from "./BaseRepository";
import { InventoryItem } from "../Entities/InventoryItem";

export class InventoryRepository extends BaseRepository {
  add(item) {
    super.add(item.getId(), new InventoryItem(item));
    return this;
  }

  getQuantity() {
    return super.getLength();
  }

  getInventoryItems() {
    return super.listAll();
  }
}
