import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding.jsx'
import Supported from '../Supported/Supported.jsx'
import Comments from '../Comments/Comments.jsx'
import Review from '../Review/Review.jsx'
import Success from '../Success/Success.jsx'

function App() {


  // form validation function to be passed down to components
  const handleInput = (event) => {
    let input = event.target.value;
    // following conditional allows user to quickly replace number by entering a different one
    // limits input to one digit
    if (input.length > 1){
        input = input.slice(-1);
    }
    // next conditional limits that one digit to numbers 1 thru 5
    if (input > 5) {
        input = 5;
    } else if (input < 1) {
        input = 1;
    }
    return input;
  }


  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route
          exact path="/"
          render={(props) => (
            <Feeling {...props} handleInput={handleInput} />
          )}
        />
        <Route
          path="/Understanding"
          render={(props) => (
            <Understanding {...props} handleInput={handleInput} />
          )}
        />
        <Route
          path="/Supported"
          render={(props) => (
            <Supported {...props} handleInput={handleInput} />
          )}
        />
        <Route path="/Comments" component={Comments} />
        <Route path="/Review" component={Review} />
        <Route path="/Success" component={Success} />
      </div>
    </Router>
  );
}

export default App;
