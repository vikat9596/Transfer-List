// src/presenter/TransferPresenter.js
import { toast } from "react-toastify";

export default class TransferPresenter {
  constructor(model) {
    this.model = model;
  }

  initializeLists() {
    return {
      choiceGroups: this.model.getChoiceGroups(),
      chosenGroups: this.model.getChosenGroups(),
    };
  }

  transferToChosen(selectedGroups) {
    this.model.addToChosen(selectedGroups);
  }

  transferToChoice(selectedGroups) {
    this.model.addToChoice(selectedGroups);
  }

  getLists() {
    return {
      choiceGroups: this.model.getChoiceGroups(),
      chosenGroups: this.model.getChosenGroups(),
    };
  }

  enableWideMilliFunctionality(groups) {
    toast.success(`Wide Milli functionality enabled for: ${groups.join(", ")}`);
  }

  disableWideMilliFunctionality(groups) {
    toast.warn(`Wide Milli functionality disabled for: ${groups.join(", ")}`);
  }
}
