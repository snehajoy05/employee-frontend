import { type FC } from 'react';
import './styles/global.css';
//import Input from './components/input/Input';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './pages/employee/employee';
import Empdetails from './pages/employee-details/employee-details';
import Create from './pages/create-employee/create';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee/:id' element={<Empdetails />} />
          <Route path='/employee/create' element={<Create />} />
          <Route path='/employee/:id/edit' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
