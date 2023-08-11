import Subheader from '../../components/subheader/subheader';
import Tablerows from '../../components/table-rows/table-rows';
import Tabletitle from '../../components/table-title/table-title';
import Layout from '../../Layout/Layout';
import { FC } from 'react';

const Employee: FC = () => {
  const data = [
    {
      name: 'Ash',
      id: 1,
      joiningDate: '15 / 25 / 2001',
      role: 'Full Stack',
      status: 'Active',
      experience: 10
    },

    {
      name: 'Tom',
      id: 2,
      joiningDate: '15 / 25 / 2015',
      role: 'Frontend',
      status: 'Active',
      experience: 5
    }
  ];

  return (
    <div>
      <Layout>
        <Subheader label='Employee List' />
        <Tabletitle />
        {data.map((employee) => (
          <Tablerows key={employee.id} rows={employee} />
        ))}
      </Layout>
    </div>
  );
};

export default Employee;
