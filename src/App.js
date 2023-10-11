import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [tanxa, setTanxa] = useState(0);
  const [tip, setTip] = useState(0);
  const [pep, setPep] = useState(1);
  const [sul, setSul] = useState(0);
  const [newt, setNewt] = useState(0);

  const handleChange = (event) => setTanxa(event.target.value);
  const handleChange1 = (event) => setPep(event.target.value);
  const calc = () => {
    setNewt((Number(tanxa) * Number(tip)) / 100 / pep);
    setSul((Number(tanxa) / pep + newt).toFixed(2));
  };
  return (
    <div className="App">
      <br />
      <form>
        <label for="inp">თანხა? </label>
        <input type="text" name="inp" placeholder="$" onChange={handleChange} />
        <br />
        <br />
        <div>
          <Tip val={5} setT={setTip} />
          <Tip val={10} setT={setTip} />
          <Tip val={15} setT={setTip} />
          <Tip val={25} setT={setTip} />
          <Tip val={50} setT={setTip} />
        </div>
        <p>ადამიანთა რაოდენობა?</p>

        <input
          type="number"
          name="npep"
          placeholder="1"
          onChange={handleChange1}
        />

        <button name="data" type="button" onClick={() => calc()}>
          Submit
        </button>

        <p>
          {newt} sul: {sul}
        </p>
        <input type="reset" />
      </form>
    </div>
  );
}

function Tip({ val, setT }) {
  return <input type="button" onClick={() => setT(val)} value={val} />;
}

export default App;
