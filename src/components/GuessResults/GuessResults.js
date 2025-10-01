import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function GuessResults({guessRes,answer}) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((i)=>(
        <Guess key={i} corrections={guessRes[i]??''}/>
      ))}
    </div>
  );
}

export default GuessResults;
