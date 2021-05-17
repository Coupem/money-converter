import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import { useStyles } from './styles';

function HeaderBar() {
  const classes = useStyles();

  return (
    <div className={classes.headerBarContainer}>
      <div className={classes.buttonGroup}>
        <ButtonGroup disableElevation variant="contained">
          <Button
            href="/converter"
            startIcon={<TrendingUpIcon />}
            className={classes.button}
          >
            Конвертер
          </Button>
          <Button
            href="/course"
            endIcon={<TrackChangesIcon />}
            className={classes.button}
          >
            Курс
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default HeaderBar;
