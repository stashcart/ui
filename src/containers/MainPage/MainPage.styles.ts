import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  tabBar: {
    backgroundColor: 'primary.light',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  tabPanel: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: '1.5rem',
    backgroundColor: 'background.paper',
    height: '80vh',
  },
});
