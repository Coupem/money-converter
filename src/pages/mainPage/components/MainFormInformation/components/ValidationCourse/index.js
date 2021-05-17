import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import ValidCourse from './components/ValidCourse';
import { requestItemsAction } from '../../ducks/actions';
import { getFilterCurrencyForCourse } from '../../ducks/selectors';

export default function ValidationCourse() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const updateCurrencyInterval = useRef(null);

  const filteredCurrency = useSelector((state) =>
    getFilterCurrencyForCourse(state.items.loadedCurrency)
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

  if (filteredCurrency.length <= 0) return null;

  return (
    <div className={classes.wrapperRenderContainer}>
      <Typography className={classes.titleTextCourse} align="center">
        Актуальный курс валюты:
      </Typography>
      <div className={classes.nameContainer}>
        <div className={classes.textCurrency}>валюта</div>
        <div className={classes.wrapperTextCourse}>
          <div className={classes.textBuy}>покупка</div>
          <div className={classes.textSale}>продажа</div>
        </div>
      </div>
      {filteredCurrency.map((item) => (
        <ValidCourse
          key={item.ccy}
          currency={item.ccy}
          sale={item.sale}
          buy={item.buy}
        />
      ))}
    </div>
  );
}
