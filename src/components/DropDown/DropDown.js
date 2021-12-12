import React, { useState } from "react";
import "./DropDown.css";
const DropDown = (props) => {
  const { options } = props;
  const [value, setValue] = useState(options[0]);
  const valueHandler = (event) => {
    const newvalue = event.target.value;
    setValue(newvalue);
  };
  return (
    <>
      <select className="select" value={value} onChange={valueHandler}>
        {options.map((option,index) => {
          return <option key={index} value={option.toLowerCase()}>{option}</option>;
        })}
      </select>
    </>
  );
};
export default DropDown;
