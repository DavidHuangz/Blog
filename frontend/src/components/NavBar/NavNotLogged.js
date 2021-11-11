import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';

// Login
import LoginButton from '../Login/LoginButton';

export default function NavNotLogged() {
  const navigate = useNavigate();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{flexGrow: 1}}>
            <IconButton
              size='large'
              color='inherit'
              onClick={() => navigate('/')}
            >
              Blog{' '}
            </IconButton>
          </Typography>
          <IconButton size='large' color='inherit' edge='end'>
            <LoginButton />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
