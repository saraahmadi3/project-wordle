import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({corrections}) {

  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_ALLOWED).map((i)=>(
      <span 
        key={i} 
        className={`cell${corrections? ' '+corrections[i].status: ''}`}>
          {corrections? corrections[i].letter: ''}
      </span>    ))}
    </p>
  );
}

export default Guess;

