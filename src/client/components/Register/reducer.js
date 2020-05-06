export default (state,action) => {
    switch (action.type) {
      case 'ON_CHANGE':{
        const { name, value } = action.payload
        return {
          ...state, 
          form: {
          ...state.form,
          [name]: value
        }};
      }
      case 'SET_ERRORS': {
        return {...state, errors: action.payload}
      }
      default:
        throw new Error();
    }
  }