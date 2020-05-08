/**
 * Quest Completion Item
 */
/**
 * @param  {} ItemDetails
 * @param  {} quantity
 */
export class QuestCompletionItem {
  constructor(ItemDetails, quantity) {
    this.ItemDetails = ItemDetails;
    this.quantity = quantity || 1;
  }

  setItemDetails(Item) {
    this.ItemDetails = Item;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  getItemDetails() {
    return this.ItemDetails;
  }

  getId() {
    return this.ItemDetails.getId();
  }

  getQuantity() {
    return this.quantity;
  }
}
