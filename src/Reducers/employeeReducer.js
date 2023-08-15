const initialState = [
  {
    id: 1,
    name: 'Ash',
    joiningDate: '11/02/2001',
    experience: 10,
    role: 'Full Stack',
    address: {
      line1: 'Edachira',
      line2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pin: '682025'
    }
  },
  {
    id: 2,
    name: 'Tom',
    joiningDate: '11/02/2015',
    experience: 5,
    role: 'Frontend',
    address: {
      line1: 'JK Junction',
      line2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pin: '682054'
    }
  }
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload.employees];

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      const newState = state.filter((employee) => employee.id !== action.payload.employees.id);

      return newState;
    }
    case 'EMPLOYEE:EDIT': {
      const updatedEmployee = action.payload.employees;

      console.log(updatedEmployee);
      const newState = state.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      );

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
