import React from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    color: '#295429',
  },
  wrapperContainerInput: {
    maxWidth: 900,
    margin: 'auto',
    padding: theme.spacing(5, 0, 10),
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
  },
  inputValue: {},
  propsContainer: {
    boxShadow: '0px 0 6px -1px rgb(0 0 0 / 40%)',
    borderRadius: 5,
  },
  responseField: {
    width: 250,
  },
  identifier: {
    color: 'red',
    width: 75,
  },
  infoField: {
    marginRight: theme.spacing(1.4),
  },
  icon: {
    color: 'black',
  },
  responseContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2.5, 1.5),
  },
}));

export default function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
