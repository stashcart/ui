import { styled } from '@mui/material';
import { GoogleLogin } from 'react-google-login';

export const GoogleLoginStyled = styled(GoogleLogin)({
  width: '100%',
  borderRadius: '4px !important',

  '&, & *': {
    height: 37,
  },

  '& span': {
    width: '100%',
    marginRight: '40px',
  },
});
