import React from 'react';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { useStyles } from './styles';

function Title() {
  const classes = useStyles();
  const titleText = 'Конвертер и актуальный курс валюты для вашего удобства'.toUpperCase();

  return (
    <div className={classes.titleTop}>
      <Typography className={classes.headerText} align="center">
        {titleText}
      </Typography>
    </div>
  );
}

export default Title;
