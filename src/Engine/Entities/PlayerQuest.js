/**
 * PlayerQuest
 */

export class PlayerQuest {
  constructor(QuestDetails) {
    this.QuestDetails = QuestDetails;
    this.isCompleted = false;
  }

  getQuest() {
    return this.QuestDetails;
  }
}
