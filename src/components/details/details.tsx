import { useState, type FC, useEffect } from 'react';
import './details.css';
import Input from '../../components/input/Input';
//import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../dropdown/dropdown';
import SmallButton from '../Smallbutton/Smallbutton';
import { useNavigate, useParams } from 'react-router-dom';
//import { editEmployee } from '../../actions/employeeAction';
import { useCreateMutation, useEditMutation } from '../../pages/create-employee/api';
import {
  useGetDepartmentListQuery,
  useGetRoleListQuery,
  useLazyGetEmployeeDetailsQuery
} from '../../pages/employee/api';

const Details: FC = () => {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [date, setDate] = useState(null);
  const [experience, setExperience] = useState(null);
  const [department, setDepartment] = useState(null);

  const { data: deptdata } = useGetDepartmentListQuery();

  const departmentchoice =
    deptdata?.map((department) => ({
      value: department.id,
      label: department.department_name
    })) || [];

  const { data: roledata } = useGetRoleListQuery();

  const rolechoice = roledata
    ? Object.values(roledata)?.map((role: string) => ({
        value: role,
        label: role
      }))
    : [];

  const [city, setCity] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [pin, setPin] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const [error, setError] = useState('');

  const [role, setRole] = useState('');
  const { id } = useParams();

  const [create, { isSuccess, isError }] = useCreateMutation();
  const [getEmployeeById, { data: employeeData }] = useLazyGetEmployeeDetailsQuery();

  const [edit, { isSuccess: isEditSuccess }] = useEditMutation();

  const navigate = useNavigate();
  const handleSubmit = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    if (
      name &&
      username &&
      password &&
      date &&
      experience &&
      role &&
      line1 &&
      line2 &&
      city &&
      state &&
      country &&
      pin
    )
      create({
        name: name,
        username: username,
        password: password,
        joiningDate: date,
        experience: Number(experience),
        departmentId: Number(department),
        role: role,
        address: {
          line1: line1,
          line2: line2,
          city: city,
          pin: pin,
          state: state,
          country: country
        }
      });
    else setError('Validation error');
  };

  // console.log('emp', employeeData);
  useEffect(() => {
    if (isSuccess) navigate(`/employee`);
  }, [isSuccess]);

  useEffect(() => {
    // const emp = employeesData.find((employee) => employee.id === Number(id));

    if (employeeData) {
      console.log('dept', employeeData?.data?.departmentId);
      setName(employeeData?.data?.name);
      setUsername(employeeData?.data?.username);
      setPassword(employeeData?.data?.password);
      setDate(employeeData?.data?.joiningDate);
      setExperience(employeeData?.data?.experience);
      setRole(employeeData?.data?.role);
      setDepartment(employeeData?.data?.departmentId);
      setLine1(employeeData?.data?.address?.line1);
      setLine2(employeeData?.data?.address?.line2);
      setCity(employeeData?.data?.address?.city);
      setPin(employeeData?.data?.address?.pin);
      setCountry(employeeData?.data?.address?.country);
      setState(employeeData?.data?.address?.state);
    }
  }, [employeeData]);

  useEffect(() => {
    if (id) getEmployeeById(id);
  }, [id]);

  const handleEdit = (e, id) => {
    e.stopPropagation();
    edit({
      id,
      body: {
        name: name,
        username: username,
        password: password,
        joiningDate: date,
        experience: Number(experience),
        departmentId: Number(department),
        role: role,
        address: {
          line1: line1,
          line2: line2,
          city: city,
          pin: pin,
          state: state,
          country: country
        }
      }
    });
  };

  useEffect(() => {
    if (isEditSuccess) navigate(`/employee`);
  }, [isEditSuccess]);

  // const dispatch = useDispatch();
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
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
          label='Username'
          type='text'
          value={username}
          placeholder='Username'
          onChange={function (e: any) {
            setUsername(e.target.value);
          }}
        />
        <Input
          label='Password'
          type='text'
          value={password}
          placeholder='Password'
          onChange={function (e: any) {
            setPassword(e.target.value);
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
          label=' Department'
          value={department}
          onChange={(value: string) => setDepartment(value)}
          placeholder='Choose Role'
          options={departmentchoice}
        />
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
          <input
            className='address-lines'
            type='number'
            value={pin}
            placeholder='Pin'
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />
          <input
            className='address-lines'
            type='text'
            value={state}
            placeholder='state'
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <input
            className='address-lines'
            type='text'
            value={country}
            placeholder='country'
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <Dropdown
          label='Role'
          value={role}
          onChange={(value: string) => setRole(value)}
          placeholder='Choose Role'
          options={rolechoice}
        />
        <Input label='Status' type='text' value='Active' onChange={() => {}} placeholder='Status' />

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
      {isError && <div>API error</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Details;
