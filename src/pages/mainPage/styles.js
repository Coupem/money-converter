import { makeStyles } from '@material-ui/core';
import 'fontsource-roboto';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: '#f9fff9',
    width: '100%',
    height: '100%',
    fontFamily: 'Roboto',
    paddingBottom: theme.spacing(5),
  },
}));
