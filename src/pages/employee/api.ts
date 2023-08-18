import baseApi from '../../services';

export interface Employee {
  id: number;
  name: string;
  username: string;
  password: string;
  joiningDate: string;
  experience: number;
  departmentId: number;
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
    }),
    getDepartmentList: builder.query<any, void>({
      query: () => '/departments'
    }),
    getRoleList: builder.query<any, void>({
      query: () => '/roles'
    })
  })
});

export const {
  useGetEmployeeListQuery,
  useGetEmployeeDetailsQuery,
  useGetDepartmentListQuery,
  useGetRoleListQuery,
  useLazyGetEmployeeDetailsQuery
} = employeeApi;
