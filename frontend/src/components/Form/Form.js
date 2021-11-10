import React, {useState, useEffect} from 'react';
import {TextField, IconButton, Typography, Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {createPost, updatePost} from '../../actions/posts';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 100,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  FormButtons: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (currentId === 0) {
    dispatch(createPost(postData));
    //   clear();
    // } else {
    //   dispatch(updatePost(currentId, postData));
    //   clear();
    // }
  };

  return (
    <div className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
        </Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value})}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags (coma separated)'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({...postData, tags: e.target.value.split(',')})
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) =>
              setPostData({...postData, selectedFile: base64})
            }
          />
        </div>
        <div className={classes.FormButtons}>
          <IconButton
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
          >
            Submit
          </IconButton>
          <IconButton
            variant='contained'
            color='secondary'
            size='small'
            onClick={clear}
          >
            Clear
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
