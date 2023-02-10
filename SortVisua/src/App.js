import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes as Switch, Route} from 'react-router-dom'

import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SigninPage/>} />
      </Switch>
    </Router>
  );
}

export default App;
