import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/QuizMeApp.css';
import Nav from './Nav';
import Home from './Home';
import Cards from './Cards';

class QuizMeApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/html-css' key='html-css' component={Cards} />
        </Switch>
      </div>
    );
  }
}

export default QuizMeApp;
