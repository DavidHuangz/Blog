import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import {CardContent, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ReplyCard from './ReplyCard';

var useStyles = makeStyles({
  container: {},
  title: {
    color: '#105100',
    fontSize: '1rem',
    fontWeight: '700',
    font: 'Roboto',
    paddingBottom: '1vw',
  },
  icon: {
    paddingRight: 10,
    color: 'gray',
    fontSize: 50,
  },
  user: {
    display: 'flex',
    overflow: 'auto',
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  deleteIcon: {
    padding: '0.5vw',
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    '&:hover': {
      color: 'red',
    },
    Post: {
      padding: 200,
    },
  },
});

export default function CommentsCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box boxShadow={3} borderRadius={5}>
        <CardContent>
          <div>
            <div className={classes.user}>
              <AccountCircle className={classes.icon} />
              <div>anonymous</div>
            </div>
            <div>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Typography>
            </div>
          </div>
        </CardContent>
      </Box>
      <ReplyCard />
    </div>
  );
}
