import { useState } from "react";
import "./styles.css";

const usePersistState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const raw = window.localStorage.getItem(key);

    if (typeof raw !== "undefined") {
      return JSON.parse(raw);
    }

    return initialValue;
  });

  const setPersistState = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setState(newValue);
  };

  return [state, setPersistState];
};

export default function App() {
  const [text, setText] = useState("");
  const [cookiesEnabled, setAndPersisitCookiesEnabled] = usePersistState(
    "cookies",
    false
  );

  return (
    <div className="w-50 m-auto">
      <p>
        <label htmlFor="cookies-input">Povolit cookies? </label>
        <input
          id="cookies-input"
          type="checkbox"
          checked={cookiesEnabled}
          onChange={(event) => {
            setAndPersisitCookiesEnabled(!!event.target.checked);
          }}
        />
      </p>
      <p>
        <input
          className="w-100"
          placeholder="I am here just to show rerenders."
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      </p>
    </div>
  );
}
