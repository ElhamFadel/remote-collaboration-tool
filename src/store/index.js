const initialState = {
  email: '',
  password: '',
  name: '',
  phone: ''
};
// factore this function
const stateController = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'name':
      return { ...state, name: action.payload };
    case 'phone':
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};

export { initialState, stateController };
