# React Transfer List Application

This React application implements a **transfer list pattern** where users can select items from one list and move them to another. It uses the **Model-View-Presenter (MVP)** architecture to ensure separation of concerns and maintain a clean code structure.

---

## Project Structure

### 1. Entry Point
- **`main.jsx`**: The application starts here. It renders the `App` component in **strict mode**.

---

### 2. Architecture (MVP Pattern)
The application is built following the **MVP pattern**:

#### **Model** (`TransferModel.js`)
- Manages the data state with two main arrays:
  - `choiceGroups`: Contains initial groups (e.g., "Group A" through "Group F").
  - `chosenGroups`: An initially empty array for transferred groups.
- Provides methods:
  - **`addToChosen(groups)`**: Moves selected groups from `choiceGroups` to `chosenGroups`.
  - **`getChoiceGroups()`** and **`getChosenGroups()`**: Data accessors.

#### **Presenter** (`TransferPresenter.js`)
- Acts as an intermediary between the **Model** and **View**.
- Key methods:
  - **`initializeLists()`**: Retrieves the initial state of the lists.
  - **`transferToChosen(groups)`**: Handles the logic for transferring selected groups.
  - **`getLists()`**: Fetches the current state of the lists.
  - **`enableWideMilliFunctionality()`**: Implements additional features for transferred groups.

#### **View Components**
- **`App.jsx`**:
  - Creates instances of the **Model** and **Presenter**.
  - Renders the `TransferList` component, passing the presenter as a prop.

- **`TransferList.jsx`**:
  - Main **UI component**.
  - Manages local state:
    - `choiceGroups`: Groups available for selection.
    - `chosenGroups`: Groups that have been transferred.
    - `selectedGroups`: Groups currently selected by the user.
  - Renders:
    - Two lists (choice and chosen groups).
    - Checkboxes for item selection.
    - A button for transferring items.

---

## Data Flow

### **Initial Load**
1. The `App` component creates instances of the **Model** and **Presenter**.
2. The `TransferList` component mounts and invokes **`initializeLists()`**.
3. Lists are populated with initial data fetched from the **Presenter**.

### **User Interaction**
1. The user selects items via checkboxes (handled by **`handleCheckboxChange()`**).
2. Clicking the transfer button triggers **`handleTransferToChosen()`**:
   - The **Presenter** updates the **Model**.
   - The **View** reflects these changes by updating its state.

---

## Styling
Styles are organized across the following CSS files:
- **`App.css`**
- **`TransferList.css`**
- **`index.css`**

---

## Build and Development

### **Tooling**
- **Vite**: Used as the build tool (configured in `vite.config.js`).
- **ESLint**: Ensures code quality (configuration in `eslint.config.js`).

### **Scripts** (defined in `package.json`)
| Command         | Description                            |
|------------------|----------------------------------------|
| `npm run dev`   | Starts the development server.         |
| `npm run build` | Builds the application for production. |
| `npm run lint`  | Runs ESLint checks.                    |

---

## How to Run the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
