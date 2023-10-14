import "./App.css";
import { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import person from "./images/icon-person.svg";
function App() {
  const [tanxa, setTanxa] = useState(0);
  const [tip, setTip] = useState(0);
  const [pep, setPep] = useState(1);
  const [sul, setSul] = useState(0);
  const [newt, setNewt] = useState(0);

  const handleChange = (event) => setTanxa(event.target.value);
  const handleChange1 = (event) => setPep(event.target.value);

  useEffect(() => {
    if (Number(tanxa) > 0 && Number(tip) > 0 && Number(pep) > 0) {
      setNewt((Number(tanxa) * Number(tip)) / 100 / pep);
      setSul((Number(tanxa) / pep + newt).toFixed(2));
    }
  }, [tanxa, tip, pep]);

  return (
    <div className="app">
      <img src={logo} alt="logo" className="logo"></img>
      <div className="wrapper">
        <form>
          <div className="first">
            <label htmlFor="inp">Bill </label>

            <input
              type="text"
              name="inp"
              placeholder="$"
              onChange={handleChange}
              className="bill"
            />

            <label>Select Tip %</label>

            <div className="grid">
              <Tip val={5} setT={setTip} />
              <Tip val={10} setT={setTip} />
              <Tip val={15} setT={setTip} />
              <Tip val={25} setT={setTip} />
              <Tip val={50} setT={setTip} />
            </div>
            <label htmlFor="npep">Number of People</label>

            <input
              type="number"
              name="npep"
              placeholder="1"
              onChange={handleChange1}
              className="people"
            />

            {/* <button name="data" type="button" onClick={() => calc()}>
              Submit
            </button> */}
          </div>
          <div className="second">
            <div className="box">
              <div>
                <h3>Tip Amount</h3>
                <span>/ person</span>
              </div>
              <p className="result">${newt}</p>
            </div>
            <div className="box">
              <div>
                <h3>Total</h3>
                <span>/ person</span>
              </div>
              <p className="result">${sul}</p>
            </div>
            <button
              type="reset"
              className="reset"
              onClick={() => {
                setSul(0);
                setNewt(0);
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Tip({ val, setT }) {
  return (
    <button type="button" onClick={() => setT(val)} className="tip">
      {val}%
    </button>
  );
}

export default App;
