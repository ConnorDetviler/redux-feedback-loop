import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding.jsx'
import Supported from '../Supported/Supported.jsx'
import Comments from '../Comments/Comments.jsx'
import Review from '../Review/Review.jsx'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/" exact component={Feeling} />
        <Route path="/Understanding" component={Understanding} />
        <Route path="/Supported" component={Supported} />
        <Route path="/Comments" component={Comments} />
        <Route path="/Review" component={Review} />
      </div>
    </Router>
  );
}

export default App;
