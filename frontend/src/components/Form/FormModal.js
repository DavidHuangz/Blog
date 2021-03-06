import React, {useState, useEffect} from 'react';
import {
  TextField,
  IconButton,
  Typography,
  CircularProgress,
} from '@material-ui/core';
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
  EditTitle: {
    fontSize: '1.5rem',
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
    fontSize: '1.5rem',
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

const Form = ({currentID}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();

  const loadingButtn = () => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  const post = useSelector((state) =>
    currentID ? state.posts.find((message) => message._id === currentID) : 0
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentID === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentID, postData));
    }
    setLoading(true);
    loadingButtn();
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
          <Typography variant='h6' className={classes.EditTitle}>
            {currentID ? 'Editing' : 'Editing'}
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
            rows={20}
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
          <div>
            {loading ? (
              <CircularProgress className={classes.loadingScreen} />
            ) : (
              <div className={classes.FormButtons}>
                <IconButton
                  className={classes.buttonSubmit}
                  variant='contained'
                  color='primary'
                  type='submit'
                >
                  Submit
                </IconButton>
              </div>
            )}
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Form;
