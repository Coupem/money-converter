import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Converter from './components/Converter';
import ValidationCourse from './components/ValidationCourse';
import { useStyles } from './styles';

function MainFormInformation() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainerInfo}>
      <Router>
        <Switch>
          <Route path="/converter">
            <Converter />
          </Route>
          <Route path="/course">
            <ValidationCourse />
          </Route>
          <Route path="/">
            <div className={classes.defaultText}>
              Выберите что Вы хотите сделать?
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainFormInformation;
