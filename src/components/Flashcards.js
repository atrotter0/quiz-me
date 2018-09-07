import React from 'react';
import fetchQuestionData from '../services/fetchQuestionData';
import Flashcard from './Flashcard';

const Flashcards = ({ match }) => {
  const allQuestions = fetchQuestionData();
  const questionsByCategory = allQuestions[match.params.category];

  return(
    <div className='page-content'>
      {questionsByCategory.map((question, index) =>
        <Flashcard
          questionText={question.questionText}
          answerText={question.answerText}
          key={index}
        />
      )}
    </div>
  );
}

export default Flashcards;
