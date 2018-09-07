import React from 'react';

const Flashcard = (props) => {
  return(
    <div>
      <p>Question: {props.questionText}</p>
      <p>Answer: {props.answerText}</p>
    </div>
  );
}

export default Flashcard;
