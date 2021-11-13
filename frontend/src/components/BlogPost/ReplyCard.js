import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useAuth0} from '@auth0/auth0-react';
import {
  Box,
  TextareaAutosize,
  makeStyles,
  CardContent,
  Button,
} from '@material-ui/core';
import {IconButton} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: '1vw',
  },
  content: {
    display: 'flex',
  },
  icon: {
    color: 'gray',
    fontSize: 50,
  },
  reply: {
    ariaLabel: 'minimum height',
    minRows: '3',
    width: '100%',
    minHeight: 150,
    fontSize: '1rem',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  userName: {
    width: 100,
    margin: '0 0 10px 10px',
    overflow: 'auto',
  },
  button: {
    padding: 15,
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
  },
}));

export default function ReplyCard() {
  const classes = useStyles();
  const {user, isAuthenticated, loginWithRedirect} = useAuth0();

  return (
    <div className={classes.container}>
      <Box boxShadow={3} borderRadius={5}>
        <CardContent className={classes.content}>
          <div style={{width: '95%'}}>
            <div className={classes.user}>
              <AccountCircle className={classes.icon} />
              <div className={classes.userName}>Meowster</div>
            </div>
            <TextareaAutosize
              className={classes.reply}
              onChange={null}
            ></TextareaAutosize>
          </div>
        </CardContent>
        <div className={classes.button}>
          {!isAuthenticated ? (
            <Button
              style={{backgroundColor: 'white'}}
              variant='contained'
              onClick={() => loginWithRedirect()}
            >
              submit
            </Button>
          ) : (
            <Button
              style={{backgroundColor: 'white'}}
              variant='contained'
              onClick={null}
            >
              submit
            </Button>
          )}
        </div>
      </Box>
    </div>
  );
}
