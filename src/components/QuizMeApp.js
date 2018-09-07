import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/QuizMeApp.css';
import Nav from './Nav';
import Home from './Home';
import Categories from './Categories';
import Flashcards from './Flashcards';

class QuizMeApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/categories/:category' component={Flashcards} />
        </Switch>
      </div>
    );
  }
}

export default QuizMeApp;
