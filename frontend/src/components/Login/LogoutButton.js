import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const {logout, isAuthenticated} = useAuth0();

  return isAuthenticated && <LogoutIcon onClick={() => logout()} />;
};

export default LogoutButton;
