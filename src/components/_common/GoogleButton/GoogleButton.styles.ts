import { styled } from '@mui/material';
import { GoogleLogin } from 'react-google-login';

export const GoogleLoginStyled = styled(GoogleLogin)`
  width: 100%;
  border-radius: 4px !important;

  &,
  & * {
    height: 37px;
  }

  & span {
    width: 100%;
    margin-right: 40px;
  }
`;
