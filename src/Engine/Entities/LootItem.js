/**
 * Loot Item
 */

export class LootItem {
  constructor(ItemDetails, dropPercentage, isDefaultItem) {
    this.ItemDetails = ItemDetails;
    this.dropPercentage = dropPercentage;
    this.isDefaultItem = isDefaultItem || false;
  }

  setItemDetails(Item) {
    this.ItemDetails = Item;
  }

  setDropPercentage(percentage) {
    this.dropPercentage = percentage;
  }

  setIsDefaultItem(bool) {
    this.isDefaultItem = bool || !this.isDefaultItem;
  }

  getId() {
    this.ItemDetails.getId();
  }

  getDropPercentage() {
    return this.dropPercentage;
  }

  getIsDefaultItem() {
    return this.isDefaultItem;
  }
}
