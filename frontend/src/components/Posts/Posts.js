import React from 'react';
import {makeStyles} from '@material-ui/core';

// importing icons & others
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// importing component
import FormModal from '../Form/FormModal';

var UseStyles = makeStyles({
  root: {
    padding: 10,
  },
  Box: {
    maxWidth: 350,
    margin: 20,
  },
  cardClick: {
    cursor: 'pointer',
  },
  messageText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: 100,
    maxWidth: 350,
  },
  settingsButton: {marginLeft: 190},
});

function Posts({post, cuurentID, setCUrrentID}) {
  const classes = UseStyles();

  // Modal for form editing
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setCUrrentID(post._id);
    console.log('CurrentPostID: ' + post._id);
  };
  const handleClose = () => setOpen(false);

  function modalForm() {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <FormModal cuurentID={cuurentID} setCUrrentID={setCUrrentID} />
      </Modal>
    );
  }

  return (
    <div className={classes.root}>
      <Card className={classes.Box}>
        <div
          className={classes.cardClick}
          onClick={() => alert('Hello from here')}
        >
          <CardMedia
            component='img'
            height='140'
            img
            src={post.selectedFile}
            alt='image'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {post.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <div className={classes.messageText}>{post.message}</div>
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button size='small' onClick={() => alert('Like')}>
            Like ({post.likeCount})
          </Button>
          <div className={classes.settingsButton}>
            <IconButton size='small' onClick={() => alert('Delete')}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='settings' onClick={handleOpen}>
              <EditIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      {modalForm()}
    </div>
  );
}

export default Posts;
