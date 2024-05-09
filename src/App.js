import { useState } from "react";
import "./App.css";
import configurations from "./configurations";
import StopLight from "./components/stoplight";

const CONFIG_NAMES = {
  standard: "standard",
  emergency: "emergency",
  protectedTurn: "protected turn",
  partyTime: "party time",
};
function App() {
  const [config, setConfig] = useState("standard");

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "grow",
        }}
      >
        {config && <StopLight configuration={configurations[config]} />}
        <select value={config} onChange={(e) => setConfig(e.target.value)}>
          {Object.entries(CONFIG_NAMES).map(([key, val]) => (
            <option key={key} value={key}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
