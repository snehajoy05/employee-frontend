import React, { FC } from 'react';
import './dropdown.css';
type DropdownPropstype = {
  value: string;
  onChange: (e) => void;
  label: string;
  placeholder: string;
  //   type: string;
};
const Dropdown: FC<DropdownPropstype> = (props) => {
  return (
    <div className='dropdown'>
      <label>{props.label}</label>
      <select className='options' onChange={props.onChange} value={props.value}>
        <option>a</option>
        <option>b</option>
      </select>
    </div>
  );
};

export default Dropdown;
