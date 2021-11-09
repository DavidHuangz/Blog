import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    !isAuthenticated && (
      <LoginIcon onClick={() => loginWithRedirect()}>Log In</LoginIcon>
    )
  );
};

export default LoginButton;
