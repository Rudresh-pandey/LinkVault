import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  function addItem() {
    setItems([...items, input]);
  }
  function inputdata(e) {
    setInput(e.target.value);
  }
  return (
    <div className="main">
      <div className="input">
        <input type="text" value={input} onChange={inputdata} />
        <button onClick={addItem}>aDD</button>
      </div>
      <div className="list">
        {items.map((item, index) => {
          return (
            <div className="item">
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
