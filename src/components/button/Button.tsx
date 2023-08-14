import React from 'react';
import { FC } from 'react';
import './Button.css';

export type ButtonPropType = {
  onClick?: () => void;
  label: string;
};

const Button: FC<ButtonPropType> = (props) => {
  return (
    <div>
      <button type='button' onClick={props.onClick} className='button' data-testid='button-test'>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
