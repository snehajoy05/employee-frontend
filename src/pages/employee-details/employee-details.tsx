import { FC } from 'react';
import Layout from '../../Layout/Layout';
import Subheader from '../../components/subheader/subheader';
import './employee-details.css';
import { useParams } from 'react-router-dom';
import Empcontent from '../../components/Empdetails/empdetails';

const data = [
  {
    id: 1,
    name: 'Ash',
    joiningDate: '11/02/2001',
    experience: 10,
    role: 'Full Stack',
    address: {
      addressLine1: 'Edachira',
      addressLine2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682025'
    }
  },
  {
    id: 2,
    name: 'Tom',
    joiningDate: '11/02/2015',
    experience: 5,
    role: 'Frontend',
    address: {
      addressLine1: 'Junction',
      addressLine2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682054'
    }
  }
];

const Empdetails: FC = () => {
  const { id } = useParams();
  const emp = data.find((employee) => employee.id === Number(id));

  return (
    <div>
      <Layout>
        <Subheader label='Employee Details' />
        <div className='empdetails'>
          <Empcontent label='Employee Name' value={emp.name} />
          <Empcontent label='Joining Date' value={emp.joiningDate} />
          <Empcontent label='Experience' value={emp.experience} />
          <Empcontent label='Role' value={emp.role} />
          <Empcontent label='Status' value='Active' />
          <Empcontent
            label='Address'
            value={`${emp.address.addressLine1},${emp.address.addressLine2},${emp.address.city},${emp.address.country},${emp.address.pincode},${emp.address.state}`}
          />
          <Empcontent label='Employee ID' value={id} />
        </div>
      </Layout>
    </div>
  );
};

export default Empdetails;
