import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox/InputBox';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessRes,setGuessRes] =useState([])
  const [fini,setFini]=useState(false);

  function handelNewGuess(guess){
    const newGuess=guess;
    const newGuesses = [...guessRes,newGuess]
    setGuessRes(newGuesses)
    if (guess ===answer || guessRes.length>=5)  {
      setFini(true)
    }
  }


  return (
  <>
  <GuessResults guessRes={guessRes} answer={answer}/>
  {!fini && <InputBox handelNewGuess={handelNewGuess} fini={fini}/>}
  <Keyboard/>
  {fini && <Banner nrGuesses={guessRes.length} win={guessRes.at(-1)===answer} answer={answer}/>}
  </>
);
}

export default Game;
