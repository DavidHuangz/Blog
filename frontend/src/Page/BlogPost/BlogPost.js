import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@mui/system';
import {CardContent, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CommentsCard from '../../components/BlogPost/CommentsCard';
import ScrollButton from 'react-scroll-button';

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

function BlogPost() {
  const classes = useStyles();

  return (
    <div id='topPage'>
      <CommentsCard /> <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <ScrollButton
        targetId={'topPage'}
        behavior={'smooth'}
        buttonBackgroundColor={'green'}
        iconType={'chevron-up'}
      />
    </div>
  );
}

export default BlogPost;
