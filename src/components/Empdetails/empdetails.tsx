import { FC } from 'react';
import './Empdetails.css';

type EmpPropType = {
  label: string;
  value: string | number;
};
const Empcontent: FC<EmpPropType> = (props) => {
  return (
    <div className='content'>
      <div className='content-text'>{props.label}</div>
      <div>{props.value}</div>
    </div>
  );
};

export default Empcontent;
