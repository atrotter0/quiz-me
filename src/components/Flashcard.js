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
      showQuestionHideAnswer: true,
      right: null,
      wrong: null,
      onStudyList: false
    };
    this.toggleShowQuestionHideAnswer = this.toggleShowQuestionHideAnswer.bind(this);
  }
  toggleShowQuestionHideAnswer = () => {
    this.setState({showQuestionHideAnswer: !this.state.showQuestionHideAnswer});
  }
  setRightAnswer = () => {
    this.setState({right: true});
    this.setState({wrong: false});
  }
  setWrongAnswer = () => {
    this.setState({right: false});
    this.setState({wrong: true});
  }
  render() {
    const gridItemStyles = {
      padding: '10px',
      width: '90%'
    }
    const flashcardStyles = {
      padding: '10px',
      height: '250px',
      color: '#2a2e31'
    }
    const cardContentStyles = {
      height: '100px'
    }
    const showAnswerButtonStyles = {
      margin: '30 auto',
      textAlign: 'center'
    }
    const actionButtonStyles = {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
    const clickedThumbStyles = {
      color: '#3f51b5'
    }
    return(
      <div style={gridItemStyles}>
        <Card style={flashcardStyles}>
          <CardContent style={cardContentStyles}>
            {
              this.state.showQuestionHideAnswer ?
              <p>{this.props.questionText}</p> :
              <p>{this.props.answerText}</p>
            }
          </CardContent>
          <div style={showAnswerButtonStyles}>
            <Button variant='outlined' onClick={this.toggleShowQuestionHideAnswer}>
              {this.state.showQuestionHideAnswer ? <span>Show Answer</span> : <span>Show Question</span>}
            </Button>
          </div>
          <CardActions>
            <div style={actionButtonStyles}>
                <Tooltip title='I got it right!'>
                  <IconButton onClick={this.setRightAnswer}>
                    {
                      this.state.right ?
                      <ThumbUp style={clickedThumbStyles} /> :
                      <ThumbUp />
                    }
                  </IconButton>
                </Tooltip>
                <Tooltip title='I got it wrong.'>
                  <IconButton onClick={this.setWrongAnswer}>
                    {
                      this.state.wrong ?
                      <ThumbDown style={clickedThumbStyles} /> :
                      <ThumbDown />
                    }
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
}

Flashcard.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string,
  key: PropTypes.string
};

export default Flashcard;
