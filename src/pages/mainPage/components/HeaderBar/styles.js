import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  headerBarContainer: {
    backgroundColor: 'white',
    margin: 'auto',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  button: {
    '&:focus': {
      backgroundColor: '#ccc',
    },
    fontSize: 'max(1.1vw, 15px)',
    padding: theme.spacing(1),
    width: '12em',
    borderRadius: 5,
    backgroundColor: 'grey',
    color: '#222222',
  },
}));
