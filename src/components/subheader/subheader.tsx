import { FC } from 'react';
import './subheader.css';
import { useNavigate } from 'react-router-dom';

export type SubheaderPropType = {
  label: string;
};

const Subheader: FC<SubheaderPropType> = (props) => {
  const navigate = useNavigate();

  return (
    <div className='subheader'>
      <div className='heading' data-testid='Test Label'>
        {props.label}
      </div>
      <button
        data-testid='button2-test'
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
