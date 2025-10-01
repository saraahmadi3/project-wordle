import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED } from '../../constants';

function Guess({label}) {

  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_ALLOWED).map((i)=>(
        <span key={i} className='cell'>{label[i]??''}</span>
      ))}
    </p>
  );
}

export default Guess;

