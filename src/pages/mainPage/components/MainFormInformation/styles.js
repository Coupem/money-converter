import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainContainerInfo: {
    maxWidth: 1400,
    height: '100%',
    margin: 'auto',
    paddingTop: theme.spacing(3),
    borderRadius: 5,
    boxShadow: '0 0 10px 1px rgba(0,0,0,0.5)',
    marginBottom: theme.spacing(10),
  },
  defaultText: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2.5),
    fontSize: 25,
  },
}));
