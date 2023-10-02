import modalSliceCards, { openModalCards, closeModalCards } from '../features/productCardsSlice'

describe('modalReducer', () => {
    it('should handle openModalCards', () => {
      const initialState = {
        openModalCards: false,
        article: null,
      };
  
      const action = {
        type: openModalCards.type,
        payload: { /* дані */ },
      };
  
      const newState = modalSliceCards(initialState, action);
  
      expect(newState.openModalCards).toBe(true);
      expect(newState.article).toEqual(action.payload);
    });
  
    it('should handle closeModalCards', () => {
      const initialState = {
        openModalCards: true,
        article: { /* об'єкт статті */ },
      };
  
      const action = {
        type: closeModalCards.type,
      };
  
      const newState = modalSliceCards(initialState, action);
  
      expect(newState.openModalCards).toBe(false);
      expect(newState.article).toBeNull();
    });
  });