import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 100,
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center',
  },
  verified: {
    padding: '5px 10px',
    marginTop: 20,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'Center',
    backgroundColor: 'orange',
  },
}));

const Profile = () => {
  const {user, isAuthenticated} = useAuth0();
  const verified = user.verified ? 'email verified' : 'email not verified';

  const classes = useStyles();

  return (
    isAuthenticated && (
      <div className={classes.root}>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <b>Email: </b>
          {user.email}
          <div className={classes.verified}>{verified}</div>
        </div>
      </div>
    )
  );
};

export default Profile;
