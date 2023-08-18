import React from 'react';
import { FC } from 'react';
import './Smallbutton.css';

export type InputPropType = {
  onClick?: (e) => void;
  label: string;
  color: 'blue' | 'white';
};

const SmallButton: FC<InputPropType> = (props) => {
  const buttonName = `${props.color === 'blue' ? 'blue-button' : 'white-button'}`;

  return (
    <div>
      <button type='button' onClick={props.onClick} className={buttonName} data-testid='label-id'>
        {props.label}
      </button>
    </div>
  );
};

export default SmallButton;
