import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  headerText: {
    color: '#ffffff',
    fontSize: 'max(1vw, 18px)',
    padding: theme.spacing(2.5),
    borderRadius: 5,
    fontWeight: 500,
  },
  titleTop: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#407940',
  },
}));
