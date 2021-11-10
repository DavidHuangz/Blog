import {makeStyles} from '@material-ui/core';
import {Link, Typography} from '@mui/material';
import {Box} from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    '@media (max-width: 800px)': {
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
        href='https://sites.google.com/view/applevr/home'
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
