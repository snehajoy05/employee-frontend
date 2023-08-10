import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Subheader from '../../components/subheader/subheader';
import { FC } from 'react';
const Employee: FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Subheader />
    </div>
  );
};

export default Employee;
