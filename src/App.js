import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const checkInputAndSetPlaceholder = () => {
    if (!inputRef.current.value) {
      inputRef.current.placeholder = "Enter a number first";
      return false; // Returns false indicating the input is not valid
    }
    return true; // Returns true indicating the input is valid
  };



  function plus(e) {
    e.preventDefault();
    if (checkInputAndSetPlaceholder()) {
      setResult((result) => result + Number(inputRef.current.value));
    }
  };

  function substract(e) {
    e.preventDefault();
    if (checkInputAndSetPlaceholder()) {
      setResult((result) => result - Number(inputRef.current.value));
    }
  };

  function multiply(e) {
    e.preventDefault();
    if (checkInputAndSetPlaceholder()) {
      setResult((result) => result * Number(inputRef.current.value));
    }
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {

    document.getElementById("input").reset();
  };

  function resetResult(e) {
    e.preventDefault();
    setResult((result) => result * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={substract}>substract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>

      </form>
    </div>
  );
}

export default App;