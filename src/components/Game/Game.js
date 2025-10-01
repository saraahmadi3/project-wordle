import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox/InputBox';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessRes,setGuessRes] =useState([])

  function handelNewGuess(guess){
    const newGuess=guess;
    const newGuesses = [...guessRes,newGuess]
    setGuessRes(newGuesses)
  }

  return (
  <>
  <GuessResults guessRes={guessRes} answer={answer}/>
  <InputBox handelNewGuess={handelNewGuess}/>
  </>
);
}

export default Game;
