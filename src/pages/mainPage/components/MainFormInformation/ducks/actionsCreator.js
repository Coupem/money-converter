import { REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS } from './type';

export const requestData = () => ({ type: REQUEST_ITEMS });
export const requestDataSuccess = (payload) => ({
  type: REQUEST_ITEMS_SUCCESS,
  payload,
});
