import React, { Component } from 'react';
import './App.css';
import Combobox from './Components/Select';
import Kafelek from './Components/Kafelek';
import MenuList from './Components/MenuList';
class App extends Component {
  render() {
    return (
      <>
     <MenuList/>
     <div className="App">
      {/* <Combobox /> */}
      <Kafelek text="test"/>


      </div>
      </>
    );
  }
}

export default App;
