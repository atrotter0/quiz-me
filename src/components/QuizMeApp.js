import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/QuizMeApp.css';
import Nav from './Nav';
import Home from './Home';
import Categories from './Categories';

class QuizMeApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories' component={Categories} />
        </Switch>
      </div>
    );
  }
}

export default QuizMeApp;
