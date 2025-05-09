import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  const userName = undefined; // 🔴 Bug 1 {We should pass a correct string here like "Ryad"}

  return (
    <div className="App">
      <h1>Buggy React App</h1>
      <Greeting name={userName} />
      <Counter initialCount="5" /> {/* 🔴 Bug 2 */}
      {/* We have to change the string "5" ==> number {5}*/}
    </div>
  );
}

export default App;
