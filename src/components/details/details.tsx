import { useState, type FC } from 'react';
import './details.css';
import Input from '../../components/input/Input';
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
  const [address, setAddress] = useState(null);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

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
        <Dropdown
          label='Status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder='Status'
        />
        <div className='address'>
          <Input
            label='Address'
            type='text'
            placeholder='Flat No./House No.'
            value={address}
            onChange={function (e: any) {
              setAddress(e.target.value);
            }}
          />
          <input
            className='address-lines'
            type='text'
            value={line1}
            placeholder='Address line 1'
            onChange={(e) => {
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
        <SmallButton label={id ? 'Save' : 'Create'} color='blue' onClick={() => {}} />
        <SmallButton label='Cancel' color='white' onClick={() => navigate(`/employee`)} />
      </div>
    </div>
  );
};

export default Details;
