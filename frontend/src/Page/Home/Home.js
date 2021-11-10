import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Posts from '../../components/Posts/Posts';

// redux
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3vw',
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center',
    flexDirection: 'column',
  },
  boxes: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paragraph: {
    paddingBottom: 20,
  },
}));

function Home() {
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // // Dynamically add cards
  // const cardArr = [];
  // const lengthofCards = 6;
  // for (let i = 0; i < lengthofCards; i++) {
  //   cardArr.push(<Posts />);
  // }

  return (
    <div className={classes.root}>
      <h1>Welcome to my blog</h1>
      <p className={classes.paragraph}>
        This website was created using MERN stack
      </p>
      <div className={classes.boxes}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
}

export default Home;
