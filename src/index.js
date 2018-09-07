import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import QuizMeApp from './components/QuizMeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <QuizMeApp />
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
