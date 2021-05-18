import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainContainerInfo: {
    maxWidth: 1000,
    height: '100%',
    margin: 'auto',
    paddingTop: theme.spacing(3),
    borderRadius: 5,
    boxShadow: '0px 6px 16px -5px rgb(0 0 0 / 70%)',
    marginBottom: theme.spacing(10),
    backgroundColor: '#ffffff',
  },
}));
