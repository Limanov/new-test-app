import React, { Component, Fragment, ComponentType} from "react";
import logo from './Img/logo.svg';
import './Kafelek.css';
type Props = {
text:string;
};

const Menu: React.FC<Props> = ({text}: Props) => {
  return (
    <>
      <div className="container">
        <div className="flexHeader">
         <div className="image"><img src={logo}/></div>
         <div className="text">{text}</div>
        </div>
          <div>  
         <div className="content">
             <hr/>
             tekst<br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <hr/> 
         </div>
        <input />
          </div>
      </div>
    </>
  );
};
export default Menu;
