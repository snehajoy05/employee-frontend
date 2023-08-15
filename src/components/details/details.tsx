import { useState, type FC, useEffect } from 'react';
import './details.css';
import Input from '../../components/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../dropdown/dropdown';
import SmallButton from '../Smallbutton/Smallbutton';
import { useNavigate, useParams } from 'react-router-dom';

const Details: FC = () => {
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [experience, setExperience] = useState(null);
  const [department, setDepartment] = useState('');

  //   const departmentchoice = [
  //     { value: 'product', label: 'Product' },
  //     { value: 'qa', label: 'QA' },
  //     { value: 'ui', label: 'UI' }
  //   ];
  const [city, setCity] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  // const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch({
      type: 'EMPLOYEE:CREATE',
      payload: {
        employees: {
          id: 3,
          name,
          joiningDate: date,
          experience,
          role,
          address: {
            line1,
            line2,
            city: 'Ernakulam',
            state: 'Kerala',
            country: 'India',
            pin: '682054'
          }
        }
      }
    });
  };
  const handleEdit = (e, id) => {
    e.stopPropagation();
    if (id) {
      const employeeToUpdate = employeesData.find((employee) => employee.id === Number(id));

      if (employeeToUpdate) {
        const updatedEmployee = {
          id: employeeToUpdate.id,
          name,
          joiningDate: date,
          experience,
          role,
          address: {
            line1,
            line2,
            city,
            state: 'Kerala',
            country: 'India',
            pin: '682054'
          }
        };

        dispatch({
          type: 'EMPLOYEE:EDIT',
          payload: {
            employees: updatedEmployee
          }
        });
      }
    }
  };

  const dispatch = useDispatch();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  useEffect(() => {
    const emp = employeesData.find((employee) => employee.id === Number(id));

    if (emp) {
      setName(emp.name);
      setDate(emp.joiningDate);
      setExperience(emp.experience);
      setRole(emp.role);
      setLine1(emp.address.line1);
      setLine2(emp.address.line2);
      setCity(emp.address.city);
    }
  }, [id]);

  //   const rolechoice = [
  //     { value: 'admin', label: 'Admin' },
  //     { value: 'user', label: 'User' }
  //   ];
  //   const statusOptions = [{ value: 'active', label: 'Active' }];

  return (
    <div className='outer1'>
      <div className='create-box'>
        <Input
          label='Employee Name'
          type='text'
          value={name}
          placeholder='Employee Name'
          onChange={function (e: any) {
            setName(e.target.value);
          }}
        />
        <Input
          label='Joining Date'
          type='text'
          placeholder='Joining Date'
          value={date}
          onChange={function (e: any) {
            setDate(e.target.value);
          }}
        />
        <Input
          label='Experience (Yrs)'
          type='number'
          placeholder='Experience'
          value={experience}
          onChange={function (e: any) {
            setExperience(e.target.value);
          }}
        />
        <Dropdown
          label='Department'
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder='Choose Department'
          // options={departmentchoice}
        />
        <Dropdown
          label='Role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder='Choose Role'
        />
        <Input label='Status' type='text' value='Active' onChange={() => {}} placeholder='Status' />

        <div className='address'>
          <Input
            label='Address'
            type='text'
            placeholder='Address Line 1'
            value={line1}
            onChange={function (e: any) {
              setLine1(e.target.value);
            }}
          />
          <input
            className='address-lines'
            type='text'
            value={line2}
            placeholder='Address line 2'
            onChange={(e) => {
              setLine2(e.target.value);
            }}
          />
          <input
            className='address-lines'
            type='text'
            value={city}
            placeholder='City'
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        {id ? (
          <Input
            label='Employee ID'
            type='text'
            placeholder='Employee ID'
            value={id}
            onChange={() => {}}
          />
        ) : null}
      </div>

      <div className='click'>
        <SmallButton
          label={id ? 'Save' : 'Create'}
          color='blue'
          onClick={id ? (e) => handleEdit(e, id) : handleSubmit}
        />
        <SmallButton label='Cancel' color='white' onClick={() => navigate(`/employee`)} />
      </div>
    </div>
  );
};

export default Details;
