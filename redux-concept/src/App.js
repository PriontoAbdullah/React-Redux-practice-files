import React from 'react';
import './App.css';
import PatientReducer from './components/PatientReducer';
import ReduceCount from './components/ReduceCount';

function App() {
  return (
    <div className="App-header">
      <ReduceCount />
      <PatientReducer />
    </div>
  );
}

export default App;
