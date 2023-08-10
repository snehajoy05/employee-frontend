import React from 'react';
import { FC } from 'react';
import './Button.css';

type InputPropType = {
  onClick: () => void;
  label: string;
};

const Button: FC<InputPropType> = (props) => {
  return (
    <div>
      <label>Login</label>
      <input type='button' onClick={props.onClick} className='button' />
    </div>
  );
};

export default Button;
