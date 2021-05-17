import { REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS } from './type';

const initialState = {
  isLoading: false,
  loadedCurrency: [],
};

export function convectorReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state, isLoading: true };

    case REQUEST_ITEMS_SUCCESS:
      return { ...state, isLoading: false, loadedCurrency: action.payload };

    default:
      return state;
  }
}
