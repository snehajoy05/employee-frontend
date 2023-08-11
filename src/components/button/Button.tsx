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
      <button type='button' onClick={props.onClick} className='button'>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
