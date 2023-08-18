import { FC } from 'react';
import './Styles.css';

const Tabletitle: FC = () => {
  return (
    <div className='table-title'>
      <div className='entries'>Employee name</div>
      <div className='entries'>Employee ID</div>
      <div className='entries'>Joining Date</div>
      <div className='entries'>Role</div>
      <div className='entries'>Status</div>
      <div className='entries'>Experience</div>
      <div className='entries'>Action</div>
    </div>
  );
};

export default Tabletitle;
