import Profile from '../../components/Profile';
import {useAuth0} from '@auth0/auth0-react';

function LoginPage() {
  const {isLoading} = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Profile />
      <div>hello</div>
    </>
  );
}

export default LoginPage;
