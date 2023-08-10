import { FC } from 'react';
import './sidebar.css';

const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
      <div className='logo-box'>
        <div className='logo'>
          <img src='assets/img/kv-logo.png' className='logo'></img>
        </div>
      </div>
      <div className='box1'>
        <div className='icon_container'>
          <img src='assets/img/Group 18536.svg' className='icon'></img>
        </div>
        <div className='text'>Employee List</div>
      </div>
    </div>
  );
};

export default Sidebar;
