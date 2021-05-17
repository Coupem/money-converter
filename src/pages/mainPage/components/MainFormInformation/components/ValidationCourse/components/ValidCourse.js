import React from 'react';
import PropTypes from 'prop-types';
import { TextFieldCurrency, TextFieldCourse } from './TextFieldComponent';
import { useStyles } from '../styles';

function ValidCourse({ currency, sale, buy }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapperCourseContainer}>
      <TextFieldCurrency value={currency} />
      <div className={classes.wrapperFieldCourse}>
        <TextFieldCourse value={buy} />
        <TextFieldCourse value={sale} />
      </div>
    </div>
  );
}

export default ValidCourse;

ValidCourse.propTypes = {
  currency: PropTypes.string,
  sale: PropTypes.string,
  buy: PropTypes.string,
};
