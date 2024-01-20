import React, { useState } from "react";

const App = () => {
  const [qiymat, setQiymat] = useState("");
  function handleSubmit(e) {
    setQiymat(qiymat+e)
  }
  function handleClear() {
    setQiymat("")
  }

  function natija(){
    setQiymat(eval(qiymat))
  }

  function oneDel(){
    setQiymat(qiymat.split("").slice(0, qiymat.length-1).join(""))
  }
  return (
    <div className="main">
      <div className="main_list">
        <div className="qism3">
          <span className="qism2">calc</span>
          <img src="/Group 6 (1).svg" alt="" />
        </div>
        <div className="joy">{qiymat}</div>
        <div className="yangi">
          <div className="tugmalar">
            <button onClick={(e) => handleSubmit(e.target.innerText)}>7</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>8</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>9</button>
            <button onClick={oneDel} className="delta" style={{backgroundColor: "#647198", color: "white"}}>
              DEL
            </button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>4</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>5</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>6</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>+</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>1</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>2</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>3</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>-</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>.</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>0</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>/</button>
            <button onClick={(e) => handleSubmit(e.target.innerText)}>x</button>
          </div>
          <div className="bottom">
              <button
                className="tugma_nol"
                onClick={handleClear}
                style={{backgroundColor: "#647198", color: "white"}}
              >
                RESET
              </button>
              <button className="tugma_clear" onClick={natija}>
                =
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
