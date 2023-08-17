import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './Reducers/employeeReducer';
// import employeeService from './services/employeeService';
import { employeeApi } from './pages/employee/api';
const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), employeeApi.middleware]
});
// const addEmployee = createAction<{ id: number }>('EMPLOYEE:CREATE');

// console.log(addEmployee({ id: 1 }));
export default store;
