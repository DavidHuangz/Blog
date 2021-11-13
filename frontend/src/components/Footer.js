import {makeStyles} from '@material-ui/core';
import {Link, Typography} from '@mui/material';
import {Box} from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    '@media (max-width: 1030px)': {
      position: 'relative',
    },
  },
}));

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        target='_blank'
        href='https://www.termsfeed.com/live/4330e882-fa48-4676-86b4-379ab6beefda'
      >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      sx={{bgcolor: 'background.paper', p: 6}}
      component='footer'
    >
      <Copyright />
    </Box>
  );
}

export default Footer;
