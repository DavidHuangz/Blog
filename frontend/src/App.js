import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import './App.css';
import {makeStyles} from '@material-ui/core/styles';

// redux
// import {useDispatch} from 'react-redux';
// import {getPosts} from './actions/posts';

// imports from components
import NavLoggged from './components/NavBar/NavLoggged';
import NavNotLogged from './components/NavBar/NavNotLogged';
import Footer from './components/Footer';

// Other pages
import Home from './Page/Home/Home';
import LoginPage from './Page/Login/LoginPage';
import CreatePost from './Page/CreatePost/CreatePost';

const useStyles = makeStyles((theme) => ({
  App: {
    // position: 'relative',
    // minHeight: '50%',
  },
}));

function App() {
  const classes = useStyles();
  const {isAuthenticated} = useAuth0();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <div className={classes.App}>
      <BrowserRouter>
        {!isAuthenticated ? <NavNotLogged /> : <NavLoggged />}
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/CreatePost' element={<CreatePost />} />
          <Route path='*' element={<Navigate to='/Home' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
