import { createAction } from '@reduxjs/toolkit';
export type addEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  role: string;
  experience: number;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pin: string;
  };
};

export type editEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  role: string;
  experience: number;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pin: string;
  };
};
export type deleteEmployeeType = {
  id: number;
};
export const addEmployee = createAction<{ employees: addEmployeeType }>('EMPLOYEE:CREATE');
export const editEmployee = createAction<{ employees: editEmployeeType }>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<{ employees: deleteEmployeeType }>('EMPLOYEE:DELETE');
