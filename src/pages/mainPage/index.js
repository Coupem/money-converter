import React from 'react';
import HeaderBar from './components/HeaderBar';
import MainFormInformation from './components/MainFormInformation';
import Title from './components/Title';
import { useStyles } from './styles';

function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Title />
      <HeaderBar />
      <MainFormInformation />
    </div>
  );
}

export default MainPage;
