import React, { FunctionComponent } from 'react';
import { GoogleLoginResponse } from 'react-google-login';
import { GoogleLoginStyled } from './GoogleButton.styles';

export const GoogleButton: FunctionComponent = () => {
  const onSuccess = (res: GoogleLoginResponse) => {
    // eslint-disable-next-line no-console
    console.log(res);
  };

  return (
    <GoogleLoginStyled
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''}
      buttonText="Sign in with Google"
      onSuccess={(res) => onSuccess(res as GoogleLoginResponse)}
      cookiePolicy="single_host_origin"
    />
  );
};
