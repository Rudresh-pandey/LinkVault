import { useState } from "react";
import "./App.css";

function App() {
  const [inputClass, SetinputClass] = useState("input");
  const [overlayClass, SetoverlayClass] = useState("");
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    "https://medium.com/latestTechs",
    "mango",
    "http://Github.com/Rudresh-pandey/linkVault",
    "mango",
    "apple",
    "mango",
    "apple",
    "apple",
    "mango",
    "apple",
    "mango",
    "apple",
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
                <div className="ham"></div>
                <div className="listItem">
                  <div className="itemInfo">
                    <p>here will be the title ...</p>
                    <p>15/03/2023</p>
                  </div>
                  <div className="itemUrl">
                    <p>{item}</p>
                  </div>
                </div>
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
