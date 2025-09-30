import React from 'react';

function GuessResults({guessRes}) {
  return (
    <div className='guess-results'>
      {guessRes.map(({label,id})=>(
        <p className='guess' key={id}>{label}</p>
      ))}
    </div>
  );
}

export default GuessResults;
