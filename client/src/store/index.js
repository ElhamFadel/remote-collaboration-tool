const initialState = {
  email: '',
  password: '',
  name: '',
  phone: '',
  photo: '',
  isSubmitting: false,
  users: {}
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
    case 'photo':
      return { ...state, photo: action.payload };
    case 'SUBMIT':
      return { ...state, isSubmitting: true };
    case 'USER_DATA':
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export { initialState, stateController };
