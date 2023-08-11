import { FC } from 'react';
import './subheader.css';

type SubheaderPropType = {
  label: string;
};

const Subheader: FC<SubheaderPropType> = (props) => {
  return (
    <div className='subheader'>
      <div className='heading'>{props.label}</div>
      <button type='button' className='create_employee'>
        <div className='eclipse'></div>
        <div>
          <img src='/assets/img/+.svg' className='plus'></img>
        </div>
        <div className='button-text'>Create Employee</div>
      </button>
    </div>
  );
};

export default Subheader;
