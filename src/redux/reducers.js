const initialState = {
    data: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_DATA_SUCCESS':
        return { ...state, data: action.payload };
      case 'LOAD_DATA_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default rootReducer;