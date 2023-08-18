import { FC } from 'react';
import './Empdetails.css';
import Status from '../status/status';

export type EmpPropType = {
  label: string;
  value?: string | number;
};
const Empcontent: FC<EmpPropType> = (props) => {
  return (
    <div className='content'>
      <div className='content-text' data-testid='label-test'>
        {' '}
        {props.label}{' '}
      </div>
      {props.value ? <div>{props.value}</div> : <Status />}
    </div>
  );
};

export default Empcontent;
