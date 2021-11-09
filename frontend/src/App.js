import './App.css';
import Nav from './components/Nav';
import NavLogin from './components/NavLogin';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/tweets' exact component={Tweet} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
