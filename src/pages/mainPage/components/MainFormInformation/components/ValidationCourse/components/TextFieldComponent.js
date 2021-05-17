import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';

export function TextFieldCurrency({ value }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.currency}
      defaultValue={value}
      variant="outlined"
      disabled
      inputProps={{
        className: classes.styleText,
      }}
    />
  );
}

export function TextFieldCourse({ value }) {
  const classes = useStyles();

  return (
    <TextField
      disabled
      className={classes.course}
      defaultValue={value}
      inputProps={{
        className: classes.styleText,
      }}
      variant="outlined"
    />
  );
}

TextFieldCurrency.propTypes = {
  value: PropTypes.string,
};

TextFieldCourse.propTypes = {
  value: PropTypes.string,
};
