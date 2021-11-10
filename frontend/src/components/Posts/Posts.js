import React from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from '@mui/material';
import reptile from './reptile.jpg';

var UseStyles = makeStyles({
  Box: {
    margin: 20,
  },
});

function Posts() {
  const classes = UseStyles();

  //redux
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <Card className={classes.Box} sx={{maxWidth: 345}}>
      <CardMedia component='img' height='140' img src={reptile} alt='reptile' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Posts;