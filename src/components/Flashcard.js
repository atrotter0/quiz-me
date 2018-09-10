import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const Flashcard = (props) => {
  const gridItemStyles = {
   padding: '10px' 
  }
  const flashcardStyles = {
    padding: '10px',
    height: '200px',
    color: '#2a2e31'
  }
  const actionButtonStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
  return(
    <div style={gridItemStyles}>
      <Card style={flashcardStyles}>
        <CardContent>
          <p>Question: {props.questionText}</p>
          <p>Answer: {props.answerText}</p>
        </CardContent>
        <CardActions>
          <div style={actionButtonStyles}>
            <Tooltip title='I got it right!'>
              <IconButton>
                <ThumbUp />
              </IconButton>
            </Tooltip>
            <Tooltip title='I got it wrong.'>
              <IconButton>
                <ThumbDown />
              </IconButton>
            </Tooltip>
            <Tooltip title='Save to Study List'>
              <IconButton>
                <StarBorder />
              </IconButton>
            </Tooltip>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

Flashcard.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  key: PropTypes.string
};

export default Flashcard;
