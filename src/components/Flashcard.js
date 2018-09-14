import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestionHideAnswer: true
    };
    this.toggleShowQuestionHideAnswer = this.toggleShowQuestionHideAnswer.bind(this);
  }
  toggleShowQuestionHideAnswer = () => {
    this.setState({showQuestionHideAnswer: !this.state.showQuestionHideAnswer});
  }
  render() {
    const gridItemStyles = {
      padding: '10px',
      width: '90%'
    }
    const flashcardStyles = {
      padding: '10px',
      height: '200px',
      color: '#2a2e31'
    }
    const showAnswerButtonStyles = {
      margin: '0 auto'
    }
    const actionButtonStyles = {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
    return(
      <div style={gridItemStyles}>
        <Card style={flashcardStyles}>
          <CardContent>
            {
              this.state.showQuestionHideAnswer ?
              <p>{this.props.questionText}</p> :
              <p>{this.props.answerText}</p>
            }
          </CardContent>
          <CardActions>
            {
              this.state.showQuestionHideAnswer ?
              <div style={showAnswerButtonStyles}>
                <Button variant='outlined' onClick={this.toggleShowQuestionHideAnswer}>Show Answer</Button>
              </div> :
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
            }
          </CardActions>
        </Card>
      </div>
    );
  }
}

Flashcard.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  key: PropTypes.string
};

export default Flashcard;
