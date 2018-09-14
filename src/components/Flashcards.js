import React from 'react';
import Flashcard from './Flashcard';

const Flashcards = (props) => {
  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }
  return(
    <div className='page-content'>
      <div style={gridContainerStyles}>
        {props.questions[props.currentPath].map((question, index) =>
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
