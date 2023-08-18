import { FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Status from '../status/status';
// import { useDispatch } from 'react-redux';
// import { deleteEmployee } from '../../actions/employeeAction';
import { useDeleteMutation } from '../../pages/create-employee/api';

type TablerowsPropType = {
  rows: {
    id: number;
    name: string;
    joiningDate: string;
    role: string;
    experience: number;
  };
};

const accessRole = localStorage.getItem('role');

const Tablerows: FC<TablerowsPropType> = (props) => {
  const { id, name, joiningDate, role, experience } = props.rows;
  const navigate = useNavigate();
  const [deleteEmployee] = useDeleteMutation();
  const handledelete = (e, id) => {
    e.stopPropagation();
    deleteEmployee(id);
  };

  const handleProp = (e) => {
    e.stopPropagation();
    navigate(`/employee/${id}/edit`);
  };

  // const dispatch = useDispatch();

  return (
    <div className='table-rows' onClick={() => navigate(`/employee/${id}`)}>
      <div className='entry'>{name}</div>
      <div className='entry'>{id}</div>
      <div className='entry'>{joiningDate}</div>
      <div className='entry'>{role}</div>
      <div className='entry'>
        <Status />
      </div>
      <div className='entry'>{experience}</div>
      {accessRole === 'Admin' ? (
        <div className='entry'>
          <img
            src='/assets/img/delete-16.png'
            className='delete'
            onClick={(e) => handledelete(e, props.rows.id)}
          ></img>
          <img
            src='/assets/img/edit-2-16.png'
            className='edit1'
            onClick={(e) => handleProp(e)}
          ></img>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Tablerows;
