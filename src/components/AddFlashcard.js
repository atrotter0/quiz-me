import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const AddFlashcard = () => {
  const createCard = (e) => {
    e.preventDefault();
  }
  const paperStyles = {
    margin: '20px auto',
    width: '80%',
    maxWidth: '500px',
    padding: '10px',
    textAlign: 'center'
  }
  return(
    <div>
      <Paper style={paperStyles}>
        <form onSubmit={createCard} noValidate autoComplete='off'>
          <TextField
            required
            id='questionText'
            label='Question'
            name='questionText'
          /><br/>
          <TextField
            required
            id='answerText'
            label='Answer'
            name='answerText'
          /><br/>
          <p>Category:</p>
          <select name='category'>
            <option>HTML/CSS</option>
            <option>JavaScript</option>
            <option>Ruby</option>
          </select><br/>
          <Button type='submit'>Create Flashcard</Button>
        </form>
      </Paper>
    </div>
  );
}

export default AddFlashcard;