import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6vw',
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center',
    flexDirection: 'column',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Welcome</h1>
      <p>This site was created using Node JS and React.</p>
    </div>
  );
}

export default Home;
