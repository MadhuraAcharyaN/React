import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) {
      setState((preState) => {
        return preState - 1;
      });
    }
  }
  const next = () => {
    if (step < 3) {
      setState((preState) => {
        return preState + 1;
      });
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((pre) => !pre)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={previous}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
