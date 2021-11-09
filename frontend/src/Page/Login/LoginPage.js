import '../../App.css';
import {makeStyles} from '@material-ui/core/styles';
import Profile from '../../components/Profile';
import {useAuth0} from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function LoginPage() {
  const {isLoading} = useAuth0();
  const classes = useStyles();

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
