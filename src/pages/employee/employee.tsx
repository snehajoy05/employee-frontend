import Subheader from '../../components/subheader/subheader';
import Tablerows from '../../components/table-rows/table-rows';
import Tabletitle from '../../components/table-title/table-title';
import Layout from '../../Layout/Layout';
import { FC } from 'react';
import { useGetEmployeeListQuery } from './api';

const Employee: FC = () => {
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  const { data } = useGetEmployeeListQuery();

  console.log(data);

  return (
    <div>
      <Layout>
        <Subheader label='Employee List' />
        <Tabletitle />
        {data?.data.map((employee) => <Tablerows key={employee.id} rows={employee} />)}
      </Layout>
    </div>
  );
};

export default Employee;
