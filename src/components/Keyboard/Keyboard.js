import React from 'react';
import { KEYBOARD_LAYOUT } from '../../constants';

function Keyboard() {
  console.log(KEYBOARD_LAYOUT)
  return (
    <div>
      {KEYBOARD_LAYOUT.map((row)=>(
        <p className='keyboard-row'>
          {row.map((currentKey)=>(
            <span className='keyboard-key'>{currentKey}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
