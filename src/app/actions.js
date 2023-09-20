import axios from 'axios';

export const loadData = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('./products.json');
        dispatch({ type: 'LOAD_DATA_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'LOAD_DATA_ERROR', error: error.message });
      }
    };
  };
  
  export const openModal = () => {
    return { type: 'OPEN_MODAL' };
  };
  
  export const closeModal = () => {
    return { type: 'CLOSE_MODAL' };
  };