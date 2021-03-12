import { Component } from 'react';
import './App.css';
import Miles from './components/Miles';
import Pushups from './components/Pushups';
import Disclaimer from './components/Disclaimer';

class App extends Component {
    state = {
    visible : true
  };

  handleHide= () => {
    this.setState({
      visible: false
    })
  }
  render() {
  return (
    <div className="App">
      {this.state.visible ? <Disclaimer/> : null }
      <button 
      onClick={this.handleHide}>
        Hide Disclaimer
      </button>
      <h1>Tracker:</h1>
      <Miles/>
      <Pushups/>
      
    </div>
    
    
  );
}
}

export default App;
