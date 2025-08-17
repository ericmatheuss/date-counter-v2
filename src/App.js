import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>

        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        <div>
          {(step !== 1 || count !== 0) && (
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
