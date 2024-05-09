import './App.css';
import StopLight from './components/stoplight';

function App() {
  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexGrow: "grow"}}>
        <StopLight />
      </div>

    </div>
  );
}

export default App;
