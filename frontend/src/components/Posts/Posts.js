import React from 'react';
import {makeStyles} from '@material-ui/core';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';

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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// redux
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../actions/posts';

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
  tag: {
    paddingTop: 5,
  },
  titleMessage: {
    paddingTop: 10,
  },
  messageText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: 100,
    maxWidth: 350,
  },
  settingsButton: {marginLeft: 190},
});

function Posts({post, currentID, setCurrentID}) {
  const classes = UseStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Modal for form editing
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setCurrentID(post._id);
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
        <FormModal currentID={currentID} />
      </Modal>
    );
  }

  return (
    <div className={classes.root}>
      <Card className={classes.Box}>
        <div
          className={classes.cardClick}
          onClick={() => navigate('/BlogPost')}
        >
          <CardMedia
            component='img'
            height='100%'
            image={
              post.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt='image'
          />
          <CardContent>
            <Typography variant='body2'>
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='h2'
              className={classes.tag}
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>

            <Typography
              gutterBottom
              variant='h5'
              className={classes.titleMessage}
            >
              {post.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <div className={classes.messageText}>{post.message}</div>
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button size='small' onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpIcon /> &nbsp;({post.likeCount})
          </Button>
          <div className={classes.settingsButton}>
            <IconButton
              size='small'
              onClick={() => dispatch(deletePost(post._id))}
            >
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
