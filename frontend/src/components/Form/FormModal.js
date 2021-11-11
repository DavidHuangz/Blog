import React, {useState, useEffect} from 'react';
import {TextField, IconButton, Typography} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {createPost, updatePost} from '../../actions/posts';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
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
  textsizeForm: {
    fontSize: 1,
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'white',
  border: '0px solid #000',
  borderRadius: 2,
  p: 4,
};

const Form = ({cuurentID, setCUrrentID}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    cuurentID ? state.posts.find((message) => message._id === cuurentID) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCUrrentID(0);
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

    if (cuurentID) {
      dispatch(updatePost(cuurentID, postData));
    } else {
      dispatch(createPost(postData));
    }
  };

  return (
    <Box sx={style}>
      <div className={classes.paper}>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant='h6'>
            {cuurentID ? `Editing "${post.title}"` : 'Title: Jessie Zheng'}
          </Typography>
          <TextField
            name='creator'
            variant='outlined'
            label='Creator'
            inputProps={{style: {fontSize: '1rem'}}} // font size of input text
            InputLabelProps={{style: {fontSize: '1rem'}}} // label size
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({...postData, creator: e.target.value})
            }
          />
          <TextField
            name='title'
            variant='outlined'
            label='Title'
            inputProps={{style: {fontSize: '1rem'}}} // font size of input text
            InputLabelProps={{style: {fontSize: '1rem'}}} // label size
            fullWidth
            value={postData.title}
            onChange={(e) => setPostData({...postData, title: e.target.value})}
          />
          <TextField
            name='message'
            variant='outlined'
            label='Message'
            inputProps={{style: {fontSize: '1rem'}}} // font size of input text
            InputLabelProps={{style: {fontSize: '1rem'}}} // label size
            fullWidth
            multiline
            rows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({...postData, message: e.target.value})
            }
          />
          <TextField
            name='tags'
            variant='outlined'
            label='Tags (coma separated)'
            inputProps={{style: {fontSize: '1rem'}}} // font size of input text
            InputLabelProps={{style: {fontSize: '1rem'}}} // label size
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
    </Box>
  );
};

export default Form;
