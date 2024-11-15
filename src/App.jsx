// src/App.jsx
import React from "react";
import TransferModel from "./model/TransferModel";
import TransferPresenter from "./presenter/TransferPresenter";
import TransferList from "./components/TransferList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const model = new TransferModel();
  const presenter = new TransferPresenter(model);

  return (
    <>
      <ToastContainer />
      <TransferList
        presenter={{
          initializeLists: () => presenter.initializeLists(),
          transferToChosen: (selectedGroups) => presenter.transferToChosen(selectedGroups),
          transferToChoice: (selectedGroups) => presenter.transferToChoice(selectedGroups),
          getLists: () => presenter.getLists(),
          enableWideMilliFunctionality: (groups) =>
            presenter.enableWideMilliFunctionality(groups),
          disableWideMilliFunctionality: (groups) =>
            presenter.disableWideMilliFunctionality(groups),
        }}
      />
    </>
  );
};

export default App;
