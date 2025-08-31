
import './App.css';
import { Counter } from './features/counter/counter';
import { CounterDisplay } from './features/counter/CounterDisplay';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Counter/>
     <CounterDisplay/>
      </header>
    </div>
  );
}

export default App;
