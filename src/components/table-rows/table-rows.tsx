import { FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

type TablerowsPropType = {
  rows: {
    id: number;
    name: string;
    joiningDate: string;
    role: string;
    experience: number;
  };
};

const Tablerows: FC<TablerowsPropType> = (props) => {
  const { id, name, joiningDate, role, experience } = props.rows;
  const navigate = useNavigate();

  return (
    <div className='table-rows' onClick={() => navigate(`/employee/${id}`)}>
      <div className='entry'>{name}</div>
      <div className='entry'>{id}</div>
      <div className='entry'>{joiningDate}</div>
      <div className='entry'>{role}</div>
      <div className='entry'>Active</div>
      <div className='entry'>{experience}</div>
      <div className='entry'>Action</div>
    </div>
  );
};

export default Tablerows;
