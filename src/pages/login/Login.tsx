import { useState, type FC, useEffect } from 'react';
import './Styles.css';
import Input from '../../components/input/Input';
// import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useLoginMutation } from './api';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [login, { data, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (data && isSuccess) localStorage.setItem('token', data.data);
  }, [data, isSuccess]);

  const onSubmit = () => {
    if (username && password) {
      login({ username, password });
      navigate(`/employee`);
    } else {
      setError(true);
    }
  };

  return (
    <div className='container'>
      <div className='leftside'>
        <img src='assets/img/banner.png' className='image'></img>
      </div>
      <div className='rightside'>
        <img src='assets/img/kv-logo.png' className='logo2'></img>
        <Input
          type='text'
          label='Username'
          value={username}
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type='password'
          label='Password'
          value={password}
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button label='Login' onClick={onSubmit} />
        {error && <div> Enter username and password</div>}
      </div>
    </div>
  );
};

export default Login;
