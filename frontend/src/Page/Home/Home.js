import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MediaCard from '../../components/MediaCard';

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

  // Dynamically add cards
  const cardArr = [];
  const lengthofCards = 6;
  for (let i = 0; i < lengthofCards; i++) {
    cardArr.push(<MediaCard />);
  }

  return (
    <div className={classes.root}>
      <h1>Welcome to my blog</h1>
      <p className={classes.paragraph}>
        This website was created using MERN stack
      </p>
      <div className={classes.boxes}>{cardArr}</div>
    </div>
  );
}

export default Home;
