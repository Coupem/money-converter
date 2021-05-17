import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';

function ComponentFromValuesCurrencies({
  label,
  saleValue,
  inNationalCurrency,
}) {
  const classes = useStyles();
  const finalValue = (inNationalCurrency / saleValue).toFixed(3);

  return (
    <div className={classes.responseContainer}>
      <TextField
        className={classes.responseField}
        variant="outlined"
        value={finalValue}
        disabled
        inputProps={{
          className: classes.icon,
        }}
        rowsMax="1"
      />
      <TextField
        className={classes.identifier}
        variant="outlined"
        multiline
        disabled
        defaultValue={label}
        InputProps={{
          className: classes.infoField,
        }}
        inputProps={{
          className: classes.icon,
        }}
      />
    </div>
  );
}

export default ComponentFromValuesCurrencies;

ComponentFromValuesCurrencies.propTypes = {
  label: PropTypes.string,
  saleValue: PropTypes.string,
  inNationalCurrency: PropTypes.number,
};
