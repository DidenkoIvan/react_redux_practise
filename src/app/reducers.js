const initialState = {
    data: [],
    modalOpen: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_DATA_SUCCESS':
        return { ...state, data: action.payload };
      case 'LOAD_DATA_ERROR':
        return { ...state, error: action.error };
      case 'OPEN_MODAL':
        return { ...state, modalOpen: true };
      case 'CLOSE_MODAL':
        return { ...state, modalOpen: false };
      default:
        return state;
    }
  };
  
  export default rootReducer;