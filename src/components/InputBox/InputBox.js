import React, { useState } from 'react';

function InputBox({handelNewGuess,running}) {
  const [guess,setGuess]=useState('');

  function handelSubmit(event){
    event.preventDefault()
    handelNewGuess(guess)
    setGuess('')
  }

  return (
  <form 
    className='guess-input-wrapper'
    onSubmit={handelSubmit}>
    <label className='guess-input'>
      Enter Guess:
    </label>
    <input 
    autoFocus
    disabled={!running}    // disable after 6 guesses or after correct guess
    required
    className='guess-input'
    value={guess} 
    onChange={event=>setGuess(event.target.value.toUpperCase())} 
    // min and max is redundant now...
    maxLength={5}
    minLength={5}
    pattern='[A-Z]{5}'
    title="5 letter word"   // the text that apperes if not match the required field or the pattern
    
    />
  </form>
);
}

export default InputBox;
