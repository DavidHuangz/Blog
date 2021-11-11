import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import './App.css';

// redux
// import {useDispatch} from 'react-redux';
// import {getPosts} from './actions/posts';
// import React, {useEffect, useState} from 'react';

// imports from components
import NavLoggged from './components/NavBar/NavLoggged';
import NavNotLogged from './components/NavBar/NavNotLogged';
import Footer from './components/Footer';

// Other pages
import Home from './Page/Home/Home';
import LoginPage from './Page/Login/LoginPage';
import CreatePost from './Page/CreatePost/CreatePost';

function App() {
  const {isAuthenticated} = useAuth0();

  // Redux
  // const [cuurentID, setCUrrentID] = useState(0);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <div>
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
