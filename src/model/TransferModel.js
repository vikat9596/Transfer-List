// Model class that handles data management and business logic
export default class TransferModel {
  // Constructor initializes two arrays:
  // choiceGroups: Initial list of available items
  // chosenGroups: Empty array for selected items
  constructor() {
      this.choiceGroups = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G"];
      this.chosenGroups = [];
  }

  // Returns the current list of available items
  getChoiceGroups() {
      return this.choiceGroups;
  }

  // Returns the current list of chosen/selected items
  getChosenGroups() {
      return this.chosenGroups;
  }

  // Moves items from choice list to chosen list
  // @param groups: Array of items to transfer
  // 1. Removes selected items from choice list using filter
  // 2. Adds selected items to chosen list using spread operator
  addToChosen(groups) {
      this.choiceGroups = this.choiceGroups.filter((group) => !groups.includes(group));
      this.chosenGroups = [...this.chosenGroups, ...groups];
  }

  // Moves items from chosen list back to choice list
  // @param groups: Array of items to transfer back
  // 1. Removes selected items from chosen list using filter
  // 2. Adds selected items back to choice list using spread operator
  addToChoice(groups) {
      this.chosenGroups = this.chosenGroups.filter((group) => !groups.includes(group));
      this.choiceGroups = [...this.choiceGroups, ...groups];
  }
}