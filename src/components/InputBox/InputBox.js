import React, { useState } from 'react';

function InputBox() {
  const [guess,setGuess]=useState('');
  return (
  <form 
    className='guess-input-wrapper'
    onSubmit={event=>{
    event.preventDefault()
    console.log(guess)
    setGuess('')
  }}>
    <label className='guess-input'>
      Enter Guess:
    </label>
    <input 
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
