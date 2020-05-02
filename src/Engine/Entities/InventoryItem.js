/**
 * inventory Item
 */

export class InventoryItem {
  constructor(ItemDetails) {
    this.ItemDetails = ItemDetails;
  }

  getItem() {
    return this.ItemDetails;
  }
}
