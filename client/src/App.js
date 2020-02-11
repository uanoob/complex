import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
        </header>
      </div>
      <Route exact path='/' component={Fib} />
      <Route exact path='/otherpage' component={OtherPage} />
    </Router>
  );
}

export default App;
