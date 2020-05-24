import React, { Component, Fragment, ComponentType } from "react";
import logo from './../Img/logo.svg';
import  './MenuList.css';
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
      <div className="menu__flex">
        {testLinkArray.map(element => <div className="menu__item"><a href={element.name}>{element.label}</a></div>)}
      </div>
    </>
  );
};
export default MenuList;
