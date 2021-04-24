import React, { useReducer } from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Miles from './components/Miles';
import Situps from './components/Situps';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <Miles state={currentState} dispatch={dispatch}/>
        <Situps state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;
