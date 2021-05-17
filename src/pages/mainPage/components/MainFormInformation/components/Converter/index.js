import React, { useEffect, useState, useRef } from 'react';
import { Typography, TextField, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { requestItemsAction } from '../../ducks/actions';
import {
  getOptions,
  getFilterCurrencyForConverter,
  getConvertToUAH,
} from '../../ducks/selectors';
import ComponentFromValuesCurrencies from './components/ComponentFromValuesCurrencies';
import NumberFormatCustom, { useStyles } from './styles';

export default function Converter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState('UAH');
  const [fieldInput, setFieldInput] = useState(null);
  const updateCurrencyInterval = useRef(null);

  const filteredCurrency = useSelector((state) =>
    getFilterCurrencyForConverter(state, currency)
  );

  const optionsForSelect = useSelector((state) =>
    getOptions(state.items.loadedCurrency)
  );

  const convertForNational = useSelector((state) =>
    getConvertToUAH(state, fieldInput, currency)
  );

  useEffect(() => {
    dispatch(requestItemsAction());
  }, [dispatch]);

  useEffect(() => {
    updateCurrencyInterval.current = setInterval(
      () => dispatch(requestItemsAction()),
      30000
    );

    return () => {
      clearInterval(updateCurrencyInterval.current);
    };
  }, [dispatch]);

  const onChangeInput = (event) => {
    setFieldInput(event.target.value);
  };
  const changeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  if (filteredCurrency.length <= 0) return null;

  return (
    <div>
      <Typography align="center" className={classes.title}>
        Конвертер:
      </Typography>
      <div className={classes.wrapperContainerInput}>
        <form className={classes.inputForm} noValidate autoComplete="off">
          <TextField
            className={classes.inputValue}
            label="введите к-во:"
            variant="outlined"
            color="primary"
            required
            onChange={onChangeInput}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            inputProps={{ maxLength: 10 }}
          />
          <TextField
            select
            displayempty="true"
            onChange={changeCurrency}
            value={currency}
            label="Валюта:"
            variant="outlined"
          >
            {optionsForSelect.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </form>
        <div className={classes.propsContainer}>
          {filteredCurrency.map((item) => (
            <ComponentFromValuesCurrencies
              key={item.ccy}
              label={item.ccy}
              saleValue={item.sale}
              inNationalCurrency={convertForNational}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
