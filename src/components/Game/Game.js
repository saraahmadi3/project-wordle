import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox/InputBox';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessRes,setGuessRes] =useState([])

  function handelNewGuess(guess){
    const newItem={
      label:guess,
      id:crypto.randomUUID()
    }
    const newGuesses = [...guessRes,newItem]
    setGuessRes(newGuesses)
  }

  return (
  <>
  <GuessResults guessRes={guessRes}/>
  <InputBox handelNewGuess={handelNewGuess}/>
  </>
);
}

export default Game;
