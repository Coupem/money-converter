import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapperRenderContainer: {
    margin: 'auto',
    paddingBottom: theme.spacing(10),
  },
  titleTextCourse: {
    fontSize: 30,
    marginBottom: theme.spacing(5),
  },
  wrapperCourseContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(1),
    width: 730,
    margin: 'auto',
  },
  wrapperFieldCourse: {
    display: 'flex',
    justifyContent: 'center',
  },
  course: {
    marginRight: theme.spacing(1),
    boxShadow: '0 0 2px 1px rgba(0,0,0,0.5)',
    borderRadius: 5,
  },
  currency: {
    width: 70,
    boxShadow: '0 0 1px 1px rgba(0,0,0,0.5)',
    borderRadius: 5,
  },
  styleText: {
    color: 'black',
    marginLeft: theme.spacing(0.7),
  },
  nameContainer: {
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    width: 626,
  },
  textCurrency: {
    paddingLeft: theme.spacing(1.05),
  },
  wrapperTextCourse: {
    display: 'flex',
  },
  textBuy: {
    paddingRight: theme.spacing(19),
  },
  textSale: {
    paddingRight: theme.spacing(11),
  },
}));
