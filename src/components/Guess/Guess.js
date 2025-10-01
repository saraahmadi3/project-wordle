import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({label,answer}) {
  const guess_with_corrections = checkGuess(label,answer)

  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_ALLOWED).map((i)=>(
      <span 
        key={i} 
        className={`cell${guess_with_corrections? ' '+guess_with_corrections[i].status: ''}`}>
          {guess_with_corrections? guess_with_corrections[i].letter: ''}
      </span>    ))}
    </p>
  );
}

export default Guess;

