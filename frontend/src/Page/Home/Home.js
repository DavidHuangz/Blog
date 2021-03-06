import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Posts from '../../components/Posts/Posts';
import {Grid} from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import ScrollButton from 'react-scroll-button';

// redux
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
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

function Home() {
  const classes = useStyles();

  function HomeTitle() {
    return (
      <>
        <h1>Welcome to my blog</h1>
        <div>This website was created using MERN stack</div>
      </>
    );
  }

  // redux
  const [currentID, setCurrentID] = useState(0);
  const dispatch = useDispatch();

  // UseSelector
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);

  return (
    <>
      <div className={classes.root} id='topPage'>
        {HomeTitle()}
        <div>
          {posts.length === 0 ? (
            <CircularProgress className={classes.loadingScreen} />
          ) : null}
        </div>
      </div>
      <Grid container alignItems='stretch'>
        {posts.map((post) => (
          <Grid
            className={classes.boxes}
            key={post._id}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Posts
              post={post}
              currentID={currentID}
              setCurrentID={setCurrentID}
            />
          </Grid>
        ))}
      </Grid>
      <ScrollButton
        targetId={'topPage'}
        behavior={'smooth'}
        buttonBackgroundColor={'green'}
        iconType={'chevron-up'}
      />
    </>
  );
}

export default Home;
