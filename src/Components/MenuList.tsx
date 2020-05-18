import React, { Component, Fragment, ComponentType } from "react";
import logo from './../Img/logo.svg';
import { LinkList } from './../Model/LinkList';
import { multiValueLabelCSS } from "react-select/src/components/MultiValue";
// import './leftMenu.css';
type Props = {
  text: string;
};
var testLinkArray =
  LinkList.map(e => { return { name: e.name, label: e.label } });

// const testLinkArray = [label,name]
// LinkList.map(e => {label:e.label,name:e.name})
const MenuList: React.FC<Props> = ({ text }: Props) => {
  return (
    <>
      <div className="leftMenu">
        <div className="flexMenu">
          {testLinkArray.map(element => <div><a href={element.name}>{element.label}</a></div>)}
          <div className="image"><img src={logo} /></div>
          <div className="text">{text}</div>
        </div>
        <div>
          <div className="content">
            <hr />
             tekst<br />
            <hr />
          </div>
          <input />
        </div>
      </div>
    </>
  );
};
export default MenuList;
