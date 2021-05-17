export const getOptions = (state) =>
  state.map((item) => ({
    value: item.ccy,
    label: item.ccy,
  }));

export const getFilterCurrencyForConverter = (
  { items: { loadedCurrency } },
  currency
) => {
  return loadedCurrency.filter((item) => currency !== item.ccy);
};

export const getConvertToUAH = (
  { items: { loadedCurrency } },
  valueInput,
  currency
) => {
  let convertedCurrency = 1;
  // transfer BTC to USD
  if (currency === 'BTC') {
    const { buy } = loadedCurrency.find((item) => item.ccy === 'USD');
    convertedCurrency = valueInput * buy;
  }

  loadedCurrency.forEach((item) => {
    if (currency === item.ccy) {
      convertedCurrency = convertedCurrency * valueInput * item.buy;
    }
  });

  return convertedCurrency;
};

export const getFilterCurrencyForCourse = (state) => {
  return state.filter((item) => item.ccy !== 'UAH');
};
