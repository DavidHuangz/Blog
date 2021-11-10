import React from 'react';
import {makeStyles} from '@material-ui/core';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from '@mui/material';
import reptile from '../Page/Home/reptile.jpg';

var UseStyles = makeStyles({
  Box: {
    margin: 20,
  },
});

function MediaCard() {
  const classes = UseStyles();
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

export default MediaCard;
