import React, { useState } from "react";

import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxChangeHandler = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <input checked={isChecked} onChange={checkboxChangeHandler} type="checkbox" />
        <button disabled={isChecked}>Change to red</button>
      </header>
    </div>
  );
}

export default App;
