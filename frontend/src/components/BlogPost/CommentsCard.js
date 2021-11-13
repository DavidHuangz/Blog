import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@mui/system';
import {CardContent, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

var useStyles = makeStyles({
  container: {
    paddingBottom: '20px',
  },
  title: {
    color: '#105100',
    fontSize: 30,
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
  },
});

export default function CommentsCard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Box boxShadow={3} borderRadius={5}>
          <CardContent>
            <div>
              <div className={classes.user}>
                <AccountCircle className={classes.icon} />
                <div>name</div>
              </div>
              <div>
                <Typography>text</Typography>
              </div>
            </div>
          </CardContent>
        </Box>
      </div>
    </>
  );
}
