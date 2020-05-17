import React from 'react'
import './Kafelek.css';
type Props = {
name:string;
};

const RoundCheckbox: React.FC<Props> = ({name}: Props) => {
      return (
        
        <React.Fragment>
          <div>
            <ul>
          <label>
              <input type="radio" name={name}/>
              <span className="fakeRadio">
                  <span className="checkmark"></span>
              </span>One
          </label>
          <li>
          <label>
              <input type="radio" name="radio"/>
              <span className="fakeRadio">
                  <span className="checkmark"></span>
              </span>Two
          </label>
        </li>
          <li>
          <label>
              <input type="radio" name="radio"/>
              <span className="fakeRadio">
                  <span className="checkmark"></span>
              </span>Three
          </label>
          </li>
          <li>
          <label>
              <input type="radio" name="radio"/>
              <span className="fakeRadio">
                  <span className="checkmark"></span>
              </span>Four
          </label>
          </li>
          </ul>
        <div className="radioGroup">
        <label className="radioLabel">
          <input type="radio" name="radioTest" className="radiobutton"/>
          <span className="radiobutton"></span>
          </label>
          <br/>
  
          <input type="radio" name="radioTest"/><br/>
          <input type="radio" name="radioTest"/><br/>
          </div>
          </div>
        </React.Fragment>
    )};
  export default RoundCheckbox;