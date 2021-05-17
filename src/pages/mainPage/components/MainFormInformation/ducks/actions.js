import Axios from 'axios';
import { requestData, requestDataSuccess } from './actionsCreator';

const UKRAINIAN_CURRENCY = { ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' };
const REQUEST_ITEMS_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const requestItemsAction = () => async (dispatch) => {
  dispatch(requestData());

  const { data } = await Axios.get(REQUEST_ITEMS_URL);

  dispatch(requestDataSuccess([...data, { ...UKRAINIAN_CURRENCY }]));
};
