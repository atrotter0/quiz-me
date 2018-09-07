import React from 'react';
import fetchQuestionData from '../services/fetchQuestionData';

const Flashcards = ({ match }) => {
  const allQuestions = fetchQuestionData();
  return(
    <div className='page-content'>
      Add flashcards component here
      <p>{match.params.category}</p>
    </div>
  );
}

export default Flashcards;
