import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Profile = () => {
  const {user, isAuthenticated} = useAuth0();
  const verified = user.verified
    ? 'email is verified'
    : 'email is not verified';
  const verifiedColor = user.verified ? '#8FC5A0BF' : '#ffa4a2';
  return (
    isAuthenticated && (
      <div>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>
            <b></b>
            {user.nickname}
          </h2>
          <p>
            <b>email: </b>
            {user.email}
          </p>
          <div
            style={{
              padding: '5px 10px',
              marginTop: 20,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'Center',
              alignItems: 'Center',
              maxWidth: 160,
              backgroundColor: verifiedColor,
            }}
          >
            {verified}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
