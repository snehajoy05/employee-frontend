/* eslint-disable prettier/prettier */
import { FC } from 'react';
import Layout from '../../Layout/Layout';
import './create.css';
import Details from '../../components/details/details';
import { useParams } from 'react-router-dom';

const Create: FC = () => {
  const id = useParams();

  return (
    <div>
      <Layout>
        <div className='create-subheader'>
          {id.id ? (
          <div className='head'>Edit Employee</div>) : <div className='head'>Create Employee</div>}
        </div>
        <div className='createdetails'>
          <Details/>
        </div>
      </Layout>
    </div>
  );
};

export default Create;
