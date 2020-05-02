import React, { Component } from 'react';
import './App.css';
import Combobox from './Select';
import Kafelek from './Kafelek';
class App extends Component {
  render() {
    return (
      <>
     <div className="App">
      {/* <Combobox /> */}
      <Kafelek text="test"/>


      </div>
      </>
    );
  }
}

export default App;
