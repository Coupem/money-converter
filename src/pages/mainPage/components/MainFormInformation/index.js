import React from 'react';
import { Route } from 'react-router-dom';
import Converter from './components/Converter';
import ValidationCourse from './components/ValidationCourse';
import { useStyles } from './styles';

function MainFormInformation() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainerInfo}>
      <Route exact path="/" component={Converter} />
      <Route path="/course" component={ValidationCourse} />
    </div>
  );
}
export default MainFormInformation;
