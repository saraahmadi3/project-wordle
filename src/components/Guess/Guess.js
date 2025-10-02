import { range } from '../../utils';
import { NUM_OF_LETTERS_ALLOWED } from '../../constants';

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

