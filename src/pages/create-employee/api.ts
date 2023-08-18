import baseApi from '../../services';
// import { Employee } from '../employee/api';

type CreatePayloadType = {
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
};

type editPayloadType = {
  id: number;
  body: {
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
  };
};
export const createApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (body: CreatePayloadType) => ({
        url: '/employees',
        method: 'POST',
        body
      })
    })
  })
});

export const editApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    edit: builder.mutation({
      query: ({ body, id }: editPayloadType) => ({
        url: `/employees/${id}`,
        method: 'PUT',
        body
      })
    })
  })
});

export const deleteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    delete: builder.mutation({
      query: (id: number) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useCreateMutation } = createApi;
export const { useEditMutation } = editApi;
export const { useDeleteMutation } = deleteApi;
