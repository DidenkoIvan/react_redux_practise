import modalSliceFromList, { openModalFromList, closeModalFromList } from '../features/productListSlice';

describe('modalReducer', () => {
  it('should handle openModalFromList', () => {
    const initialState = {
      openModalFromList: false,
      article: null,
    };

    const action = {
      type: openModalFromList.type,
      payload: { /*дані */ },
    };

    const newState = modalSliceFromList(initialState, action);

    expect(newState.openModalFromList).toBe(true);
    expect(newState.article).toEqual(action.payload);
  });

  it('should handle closeModalFromList', () => {
    const initialState = {
      openModalFromList: true,
      article: { /* об'єкт статті */ },
    };

    const action = {
      type: closeModalFromList.type,
    };

    const newState = modalReducer(initialState, action);

    expect(newState.openModalFromList).toBe(false);
    expect(newState.article).toBeNull();
  });

  it('should return the initial state for unknown action', () => {
    const initialState = {
      openModalFromList: false,
      article: null,
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: { /*дані */ },
    };

    const newState = modalSliceFromList(initialState, action);

    expect(newState).toEqual(initialState);
  });
});