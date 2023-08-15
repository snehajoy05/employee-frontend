import { FC } from 'react';
import Layout from '../../Layout/Layout';
import './employee-details.css';
import { useNavigate, useParams } from 'react-router-dom';
import Empcontent from '../../components/Empdetails/empdetails';
import { useSelector } from 'react-redux';

const Empdetails: FC = () => {
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
  const { id } = useParams();
  const emp = employeesData.find((employee) => employee.id === Number(id));
  const navigate = useNavigate();

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
          <Empcontent label='Employee Name' value={emp.name} />
          <Empcontent label='Joining Date' value={emp.joiningDate} />
          <Empcontent label='Experience' value={emp.experience} />
          <Empcontent label='Role' value={emp.role} />
          <Empcontent label='Status' value={null} />
          <Empcontent
            label='Address'
            value={`${emp.address.line1},${emp.address.line2},${emp.address.city},${emp.address.country},${emp.address.pin},${emp.address.state}`}
          />
          <Empcontent label='Employee ID' value={id} />
        </div>
      </Layout>
    </div>
  );
};

export default Empdetails;
