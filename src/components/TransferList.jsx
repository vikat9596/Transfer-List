// Import React and required hooks
import React, { useState, useEffect } from "react";
import "./App.css";

// TransferList component - implements a dual-list transfer UI pattern
const TransferList = ({ presenter }) => {
  // State management:
  const [choiceGroups, setChoiceGroups] = useState([]); // Available items
  const [chosenGroups, setChosenGroups] = useState([]); // Selected items
  const [selectedGroups, setSelectedGroups] = useState([]); // Currently checked items

  // Initialize lists when component mounts
  useEffect(() => {
    const { choiceGroups, chosenGroups } = presenter.initializeLists();
    setChoiceGroups(choiceGroups);
    setChosenGroups(chosenGroups);
  }, [presenter]);

  // Handle transfer of items to chosen list
  const handleTransferToChosen = () => {
    presenter.transferToChosen(selectedGroups); // Move items to chosen list
    const { choiceGroups, chosenGroups } = presenter.getLists(); // Get updated lists
    setChoiceGroups(choiceGroups);
    setChosenGroups(chosenGroups);
    presenter.enableWideMilliFunctionality(selectedGroups); // Enable special functionality
    setSelectedGroups([]); // Clear selections
  };

  // Handle transfer of items back to choice list
  const handleTransferToChoice = () => {
    presenter.transferToChoice(selectedGroups);
    const { choiceGroups, chosenGroups } = presenter.getLists();
    setChoiceGroups(choiceGroups);
    setChosenGroups(chosenGroups);
    presenter.disableWideMilliFunctionality(selectedGroups);
    setSelectedGroups([]);
  };

  // Toggle item selection in either list
  const handleCheckboxChange = (group) => {
    setSelectedGroups((prevSelected) =>
      prevSelected.includes(group)
        ? prevSelected.filter((item) => item !== group) // Uncheck if checked
        : [...prevSelected, group] // Check if unchecked
    );
  };

  // Render UI with two lists and transfer buttons
  return (
    <div className="container">
      {/* Left list - Available items */}
      <div className="list-container">
        <h3>Choice Groups</h3>
        <ul className="list">
          {choiceGroups.map((group, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={selectedGroups.includes(group)}
                onChange={() => handleCheckboxChange(group)}
              />
              {group}
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button 
            onClick={handleTransferToChosen} 
            disabled={selectedGroups.length === 0}
          >
            →
          </button>
        </div>
      </div>

      {/* Right list - Chosen items */}
      <div className="list-container">
        <h3>Chosen Groups</h3>
        <ul className="list">
          {chosenGroups.map((group, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={selectedGroups.includes(group)}
                onChange={() => handleCheckboxChange(group)}
              />
              {group}
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button 
            onClick={handleTransferToChoice} 
            disabled={selectedGroups.length === 0}
          >
            ←
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferList;