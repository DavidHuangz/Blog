import './App.css';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

// NavBar
import Nav from './components/NavBar/Nav';
import NavLogin from './components/NavBar/NavLogin';

// Page
import LoginPage from './Page/Login/LoginPage';
import Home from './Page/Home/Home';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <BrowserRouter>
      {!isAuthenticated ? <NavLogin /> : <Nav />}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/Home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
