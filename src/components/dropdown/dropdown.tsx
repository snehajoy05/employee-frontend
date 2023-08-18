import React, { FC } from 'react';
import './dropdown.css';
type DropdownPropstype = {
  value: string;
  onChange: (e) => void;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
};
const Dropdown: FC<DropdownPropstype> = (props) => {
  return (
    <div className='dropdown'>
      <label>{props.label}</label>
      <select
        className='options'
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
