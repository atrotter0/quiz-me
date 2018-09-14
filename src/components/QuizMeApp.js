import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/QuizMeApp.css';
import Nav from './Nav';
import HowTo from './HowTo';
import Categories from './Categories';
import Flashcards from './Flashcards';
import Error404 from './Error404';

class QuizMeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          route: '/categories/html-css',
          name: 'HTML/CSS'
        },
        {
          route: '/categories/javascript',
          name: 'JavaScript'
        },
        {
          route: '/categories/ruby',
          name: 'Ruby'
        }
      ],
      questions: [
        {
          "html-css": [
            {
              questionText: 'What does HTML stand for?',
              answerText: 'Blah'
            },
            {
              questionText: 'List three elements introduced with HTML5.',
              answerText: 'Blah'
            },
            {
              questionText: 'What does CSS stand for?',
              answerText: 'Blah'
            },
            {
              questionText: 'What does cascading mean?',
              answerText: 'Blah'
            },
            {
              questionText: 'What is the difference between a div and a span?',
              answerText: 'Blah'
            },
            {
              questionText: 'When would you use a span over a div?',
              answerText: 'Blah'
            }
          ],
          "javascript": [
            {
              questionText: 'What is npm? Why would we want to use it?',
              answerText: 'Blah'
            },
            {
              questionText: 'What is webpack and what is it used for?',
              answerText: 'Blah'
            },
            {
              questionText: 'What is a dependency graph?',
              answerText: 'Blah'
            }
          ],
          "ruby": [
            {
              questionText: 'How does inheritance work in Ruby? How is it useful?',
              answerText: 'Blah'
            },
            {
              questionText: 'When should we use a mixin instead of class inheritance?',
              answerText: 'Blah'
            },
            {
              questionText: 'What is an attr method and why are these methods useful?',
              answerText: 'Blah'
            }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route
            exact path='/'
            component={HowTo} 
          />
          <Route
            exact path='/categories'
            render={() => <Categories categories={this.state.categories} />}
          />
          <Route 
            exact path='/categories/:category'
            component={Flashcards}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default QuizMeApp;
