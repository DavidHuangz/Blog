import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Posts from '../../components/Posts/Posts';
import {Grid} from '@material-ui/core';

// redux
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center',
    flexDirection: 'column',
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
      <div className={classes.root}> {HomeTitle()}</div>
      <Grid container alignItems='stretch'>
        {posts.map((post) => (
          <Grid
            className={classes.boxes}
            key={post._id}
            item
            xs={12}
            sm={3}
            md={4}
          >
            <Posts
              post={post}
              currentID={currentID}
              setCurrentID={setCurrentID}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
