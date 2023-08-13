import { FC } from 'react';
import './subheader.css';
import { useNavigate } from 'react-router-dom';

type SubheaderPropType = {
  label: string;
};

const Subheader: FC<SubheaderPropType> = (props) => {
  const navigate = useNavigate();

  return (
    <div className='subheader'>
      <div className='heading'>{props.label}</div>
      <button
        type='button'
        onClick={() => navigate(`/employee/create`)}
        className='create_employee'
      >
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
