import React, { Component } from 'react';
import './App.css';
import Combobox from './Components/Select';
import Kafelek from './Components/Kafelek';
import MenuList from './Components/MenuList';
class App extends Component {
  render() {
    return (
      <>
     <div className="App">
      {/* <Combobox /> */}
      <Kafelek text="test"/>
        <MenuList/>

      </div>
      </>
    );
  }
}

export default App;
