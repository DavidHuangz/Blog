import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

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

  return (
    <div className='App'>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
