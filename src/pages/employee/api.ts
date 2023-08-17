import baseApi from '../../services';

export interface Employee {
  id: number;
  name: string;
  joiningDate: string;
  experience: number;
  role: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pin: string;
  };
}

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: Employee[] }, void>({
      query: () => '/employees'
    }),
    getEmployeeDetails: builder.query<{ data: Employee }, string>({
      query: (id) => `/employees/${id}`
    })
  })
});

export const { useGetEmployeeListQuery, useGetEmployeeDetailsQuery } = employeeApi;
