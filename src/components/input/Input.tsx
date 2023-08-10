import React from 'react';
import { FC } from 'react';
import './Styles.css';

type InputPropType = {
  value: string;
  onChange: (e) => void;
  label: string;
  type: 'text' | 'password';
  placeholder: string;
};

const Input: FC<InputPropType> = (props) => {
  return (
    <div>
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
