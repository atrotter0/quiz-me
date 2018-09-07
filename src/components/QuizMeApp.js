import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/QuizMeApp.css';
import Nav from './Nav';
import Home from './Home';

class QuizMeApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default QuizMeApp;
