import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <select className="select select-bordered w-md max-w-xs">
        <option selected>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
    </div>
  );
}

export default App;
