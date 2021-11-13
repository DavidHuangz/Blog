import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import ScrollButton from 'react-scroll-button';

// imports from components
import NavLoggged from './components/NavBar/NavLoggged';
import NavNotLogged from './components/NavBar/NavNotLogged';
import Footer from './components/Footer';

// Other pages
import Home from './Page/Home/Home';
import LoginPage from './Page/Login/LoginPage';
import CreatePost from './Page/CreatePost/CreatePost';
import BlogPost from './Page/BlogPost/BlogPost';

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
            <Route path='/BlogPost' element={<BlogPost />} />
            <Route path='*' element={<Navigate to='/Home' />} />
          </Routes>
          <Footer />
          <ScrollButton
            targetId={'topPage'}
            behavior={'smooth'}
            buttonBackgroundColor={'green'}
            iconType={'chevron-up'}
          />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
