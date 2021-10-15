import { makeStyles } from 'utils/make-styles';

export const styles = makeStyles({
  tabBar: {
    backgroundColor: 'primary.light',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  tabPanel: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: '1rem',
    backgroundColor: 'background.paper',
    height: '80vh',
  },
});
