import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="w-50 m-auto">
      <p>{counter}</p>
      <p>
        <button>Increment</button>
      </p>
    </div>
  );
}
