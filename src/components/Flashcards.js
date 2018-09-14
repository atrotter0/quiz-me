import React from 'react';
import { fetchAllQuestions } from '../services/dataService';
import Flashcard from './Flashcard';

const Flashcards = ({ match }) => {
  const allQuestions = fetchAllQuestions();
  const questionsByCategory = allQuestions[match.params.category];
  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }

  return(
    <div className='page-content'>
      <div style={gridContainerStyles}>
        {questionsByCategory.map((question, index) =>
          <Flashcard
            questionText={question.questionText}
            answerText={question.answerText}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

export default Flashcards;
