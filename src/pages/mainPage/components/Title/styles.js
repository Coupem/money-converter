import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  headerText: {
    color: 'black',
    fontSize: 'max(1vw, 18px)',
    padding: theme.spacing(2.5),
    borderRadius: 5,
    fontWeight: 500,
  },
  titleTop: {
    boxShadow: '0 0 10px 1px rgba(0,0,0,0.5)',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(to left top, grey, #ccc)',
  },
}));
