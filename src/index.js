import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizMeApp from './components/QuizMeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <QuizMeApp />,
  document.getElementById('root')
);
registerServiceWorker();
