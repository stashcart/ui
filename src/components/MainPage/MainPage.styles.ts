import { AppBar, Card, styled } from '@mui/material';
import { theme } from 'theme';

export const TabBar = styled(AppBar)({
  backgroundColor: theme.palette.primary.light,
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
});

export const TabPanel = styled(Card)({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  padding: '2.5rem',
  backgroundColor: theme.palette.background.paper,
  height: '80vh',
});
