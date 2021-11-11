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
  IconButton,
  Modal,
} from '@mui/material';
import reptile from './reptile.jpg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import FormModal from '../Form/FormModal';

var UseStyles = makeStyles({
  Box: {
    margin: 20,
  },
  settingsButton: {marginLeft: 190},
});

function Posts({}) {
  const classes = UseStyles();

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //redux
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div>
      <Card className={classes.Box} sx={{maxWidth: 345}}>
        <CardMedia
          component='img'
          height='140'
          img
          src={reptile}
          alt='reptile'
        />
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
          <Button size='small'>Like </Button>
          <div className={classes.settingsButton}>
            <IconButton size='small'>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='settings' onClick={handleOpen}>
              <EditIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <FormModal />
      </Modal>
    </div>
  );
}

export default Posts;
