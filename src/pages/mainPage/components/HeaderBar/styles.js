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
    backgroundColor: '#f9fff9',
  },
  button: {
    '&:focus': {
      backgroundColor: '#407940',
    },
    '&:hover': {
      backgroundColor: '#335f33',
    },
    fontSize: 'max(1.1vw, 15px)',
    padding: theme.spacing(1),
    width: '12em',
    borderRadius: 5,
    backgroundColor: '#407940',
    color: '#ffffff',
  },
}));
