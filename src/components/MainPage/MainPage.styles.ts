import { AppBar, Card, styled } from '@mui/material';
import { theme } from 'theme';

export const TabBar = styled(AppBar)`
  background-color: ${theme.palette.primary.light};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TabPanel = styled(Card)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 2.5rem;
  background-color: ${theme.palette.background.paper};
  height: 80vh;
`;
