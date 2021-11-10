import './App.css';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

// imports from components
import NavLoggged from './components/NavBar/NavLoggged';
import NavNotLogged from './components/NavBar/NavNotLogged';
import Footer from './components/Footer';

// Page
import LoginPage from './Page/Login/LoginPage';
import Home from './Page/Home/Home';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <BrowserRouter>
      {!isAuthenticated ? <NavNotLogged /> : <NavLoggged />}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/Home' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
