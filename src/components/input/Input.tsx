import React from 'react';
import { FC } from 'react';
import './Styles.css';

type InputPropType = {
  value: string;
  onChange: (e) => void;
  type: 'text' | 'password' | 'number';
  placeholder: string;
  label: string;
};

const Input: FC<InputPropType> = (props) => {
  return (
    <div className='input-container'>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        className='input'
      />
    </div>
  );
};

export default Input;
