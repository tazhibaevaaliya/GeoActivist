import React, { Component,useState } from "react";
import ReactDOM from "react-dom";
import makeAnimated from "react-select/animated";
import { typeOfActivism } from "./data.js";
import MySelect from "./MySelect.js";
import { components } from "react-select";

export default function DropDown_typeOfActivism(){

    const [optionSelected,setOption] = useState(null);
    const handleChange = (selected) => {
        setOption(selected);
    };

    const MultiValue = props => (
        <components.MultiValue {...props}>
          <span>{props.data.label}</span>
        </components.MultiValue>
      );

      const animatedComponents = makeAnimated();

      const Option = props => {
        return (
          <div>
            <components.Option {...props}>
              <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
              />{" "}
              <label>{props.label}</label>
            </components.Option>
          </div>
        );
      };

    return(
        <MySelect
        options={typeOfActivism}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option, MultiValue, animatedComponents }}
        onChange={handleChange}
        allowSelectAll={true}
        value={optionSelected}
      />
    );
}
