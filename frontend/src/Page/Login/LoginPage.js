import '../../App.css';
import Profile from '../../components/Login/Profile';
import {useAuth0} from '@auth0/auth0-react';

function LoginPage() {
  const {isLoading} = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <Profile />
      </div>
    </>
  );
}

export default LoginPage;
