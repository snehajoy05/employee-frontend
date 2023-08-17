import { FC, useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import './employee-details.css';
import { useNavigate, useParams } from 'react-router-dom';
import Empcontent from '../../components/Empdetails/empdetails';
// import { useSelector } from 'react-redux';
import { Employee, useGetEmployeeDetailsQuery } from '../employee/api';

const Empdetails: FC = () => {
  // const emp?loyeesData = useSelector((state: any) => {
  //   return state.emp?loyees;
  // });

  const { id } = useParams();
  const { data, isSuccess } = useGetEmployeeDetailsQuery(id);

  console.log(data);
  const [emp, setEmp] = useState<Employee>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && isSuccess) {
      const details = data.data;

      setEmp(details);
    }
  }, [data, isSuccess]);

  return (
    <div>
      <Layout>
        <div className='edit-subheader'>
          <div className='title'>Employee Details</div>
          <button
            type='button'
            onClick={() => navigate(`/employee/${id}/edit`)}
            className='edit_employee'
          >
            <div className='blue'></div>
            <div>
              <img src='/assets/img/Path 327.svg' className='pencil'></img>
            </div>
            <div className='pencil-text'>Edit</div>
          </button>
        </div>
        <div className='empdetails'>
          <Empcontent label='Employee Name' value={emp?.name} />
          <Empcontent label='Joining Date' value={emp?.joiningDate} />
          <Empcontent label='Experience' value={emp?.experience} />
          <Empcontent label='Role' value={emp?.role} />
          <Empcontent label='Status' value={null} />
          <Empcontent
            label='Address'
            value={`${emp?.address.line1},${emp?.address.line2},${emp?.address.city},${emp?.address.country},${emp?.address.pin},${emp?.address.state}`}
          />
          <Empcontent label='Employee ID' value={id} />
        </div>
      </Layout>
    </div>
  );
};

export default Empdetails;
