import { combineReducers } from 'redux';
import { convectorReducer } from '../pages/mainPage/components/MainFormInformation/ducks';

export const rootReducer = combineReducers({
  items: convectorReducer,
});
