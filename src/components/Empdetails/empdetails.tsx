import { FC } from 'react';
import './Empdetails.css';
import Status from '../status/status';

type EmpPropType = {
  label: string;
  value: string | number;
};
const Empcontent: FC<EmpPropType> = (props) => {
  return (
    <div className='content'>
      <div className='content-text'>{props.label}</div>
      {props.value ? <div>{props.value}</div> : <Status />}
    </div>
  );
};

export default Empcontent;
