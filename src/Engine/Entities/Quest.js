/**
 * Quest Entity
 */

import { Item } from "./Item";
/**
 * @param  {} id
 * @param  {} name
 * @param  {} description
 * @param  {} rewardExperiencePoints
 * @param  {} rewardGold
 * @param  {} RewardItem
 */
export class Quest {
  constructor(
    id,
    name,
    description,
    rewardExperiencePoints,
    rewardGold,
    RewardItem,
    QuestCompletionItemsList
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rewardExperiencePoints = rewardExperiencePoints;
    this.rewardGold = rewardGold;
    this.RewardItem = RewardItem || new Item();
    this.QuestCompletionItemsList = QuestCompletionItemsList;
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setDescription(description) {
    this.description = description;
  }

  setRewardGold(amount) {
    this.rewardGold = amount;
  }

  setRewardItem(item) {
    this.RewardItem = item;
  }

  setQuestCompletionItem(item) {
    this.QuestCompletionItemsList.add(item);
    return this;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getRewardExperiencePoints() {
    return this.rewardExperiencePoints;
  }

  getRewardItem() {
    return this.RewardItem;
  }

  getQuestCompletionItems() {
    return this.QuestCompletionItemsList;
  }

  addQuestCompletionItem(item) {
    this.QuestCompletionItemsList.add(item);
    return this;
  }
}
