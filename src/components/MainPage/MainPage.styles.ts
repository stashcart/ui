import { makeStyles } from 'utils/make-styles';

export const styles = makeStyles({
  tabBar: {
    bgcolor: 'primary.light',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tabPanel: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 5,
    bgcolor: 'background.paper',
    height: '80vh',
  },
});
