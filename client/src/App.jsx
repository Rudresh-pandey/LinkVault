import { useState } from "react";
import "./App.css";

function App() {
  const [inputClass, SetinputClass] = useState("input");
  const [overlayClass, SetoverlayClass] = useState("");
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    "apple",
    "mango",
    "apple",
    "mango",
    "apple",
    "mango",
  ]);
  function addItem() {
    setItems([...items, input]);
  }
  function inputdata(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <div className="main">
        {/* <div className="input">
        <input type="text" value={input} onChange={inputdata} />
        <button onClick={addItem}>aDD</button>
      </div> */}
        <div className="list">
          {items.map((item, index) => {
            return (
              <div className="item">
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="add">
          <button
            id="addBtn"
            onClick={() => {
              SetinputClass("input active");
              SetoverlayClass("active");
            }}
          >
            add
          </button>
        </div>
      </div>

      <div className={inputClass}>
        <div>
          <input type="text" value={input} onChange={inputdata} />
          <button onClick={addItem} id="addBtn">
            aDD
          </button>
        </div>
        <button
          id="closeBtn"
          onClick={() => {
            SetinputClass("input");
            SetoverlayClass("");
          }}
        >
          &times;
        </button>
      </div>
      <div id="overlay" className={overlayClass}></div>
    </div>
  );
}

export default App;
