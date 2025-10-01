import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox/InputBox';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


const initialKeyboardStatus = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
  initialKeyboardStatus[letter] = undefined;
});


function Game() {
  const [guessRes,setGuessRes] =useState([])
  const [fini,setFini]=useState({running:true,win:false});
  const [keyboardStatus, setKeyboardStatus] =useState(initialKeyboardStatus) //iterate through alphabet and set initially to undefined

  function handelNewGuess(guess){
    const guess_with_corrections = checkGuess(guess,answer)
    const newGuesses = [...guessRes,guess_with_corrections]
    setGuessRes(newGuesses)

    const win =guess===answer
    if (win || newGuesses.length>=NUM_OF_GUESSES_ALLOWED)  {
      setFini({running:false,win:win})
    }
    const newKeyboardStatus = {...keyboardStatus};
    
    guess_with_corrections.forEach(({letter,status}) => {
      newKeyboardStatus[letter] =status
    })

    setKeyboardStatus(newKeyboardStatus)
  }
  console.log(fini)

  return (
  <>
  <GuessResults guessRes={guessRes} answer={answer}/>
  {fini.running && <InputBox handelNewGuess={handelNewGuess} running={fini.running}/>}
  <Keyboard keyboardStatus={keyboardStatus}/>
  {!fini.running && <Banner nrGuesses={guessRes.length} win={fini.win} answer={answer}/>}
  </>
);
}

export default Game;
