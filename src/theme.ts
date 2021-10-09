import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
    primary: {
      main: '#55bc7b',
    },
    secondary: {
      main: '#607d8b',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
});
