import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHooks />
      <Users />
    </div>
  );
}

export default App;
