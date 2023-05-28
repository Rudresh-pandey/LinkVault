import React from "react";
import "../App.css";
import { useState } from "react";

export default function UserPage() {
  const date = new Date();
  const [inputClass, SetinputClass] = useState("input");
  const [overlayClass, SetoverlayClass] = useState("");
  const [input, setInput] = useState("");
  // const [items, setItems] = useState([
  //   "https://medium.com/latestTechs",
  //   "mango",
  //   "http://Github.com/Rudresh-pandey/linkVault",
  // ]);

  const [items, setItems] = useState([
    {
      title: "here will be the title ...",
      time: "15/03/17",
      desc: "http://Github.com/Rudresh-pandey/linkVault",
    },
  ]);

  function addItem() {
    setItems([
      ...items,
      {
        title: "here will be the title ...",
        time: date.toLocaleString(),
        desc: input,
      },
    ]);
    console.log(date.toLocaleString());
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
                    <p>{item.title}</p>
                    <p>{item.time}</p>
                  </div>
                  <div className="itemUrl">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="add">
          <button
            id="addList"
            onClick={() => {
              SetinputClass("input active");
              SetoverlayClass("active");
            }}
          >
            <img src="images/addition.png" alt="" />
          </button>
        </div>
      </div>

      <div className={inputClass}>
        <div className="inputoptions">
          <div className="inputleft">
            <div className="selectionBtn">
              <button>
                <img src="images/foldericon.png" alt="" />
              </button>
              <button>
                <img src="images/fileicon.png" alt="" />
              </button>
            </div>
            <div>
              <input type="text" value={input} onChange={inputdata} />
            </div>
          </div>
          <div className="inputright">
            <button onClick={addItem} id="addBtn">
              <img src="images/star.png" alt="" />
            </button>
          </div>
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
