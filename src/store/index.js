const initialState = {
  email: '',
  password: '',
  name: '',
  phone: '',
  photo: ''
};
// factore this function
const stateController = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'name':
      console.log('jjjjjjjjjjjjjjjjjjjj');
      return { ...state, name: action.payload };
    case 'phone':
      return { ...state, phone: action.payload };
    case 'photo':
      return { ...state, photo: action.payload };
    default:
      return state;
  }
};

export { initialState, stateController };
