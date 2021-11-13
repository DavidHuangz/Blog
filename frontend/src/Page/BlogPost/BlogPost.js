import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ScrollButton from 'react-scroll-button';

// importing component
import CommentsCard from '../../components/BlogPost/CommentsCard';
import BlogInfo from '../../components/BlogPost/BlogInfo';

const useStyles = makeStyles(() => ({
  root: {
    padding: 50,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loadingScreen: {
    padding: 100,
  },
  boxes: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function BlogPost() {
  const classes = useStyles();

  return (
    <div id='topPage' className={classes.root}>
      <BlogInfo />
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
