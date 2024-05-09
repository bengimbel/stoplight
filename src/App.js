import { useState } from 'react';
import './App.css';
import { configurations } from './configurations';
import StopLight from './components/stoplight';

function App() {

  const [configuration, setConfiguration] = useState(configurations.standard)
  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexGrow: "grow"}}>
        <StopLight configuration={configuration}/>
      </div>

    </div>
  );
}

export default App;
