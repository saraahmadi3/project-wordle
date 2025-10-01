import React from 'react';
import { KEYBOARD_LAYOUT } from '../../constants';

function Keyboard({keyboardStatus}) {
  return (
    <div className='keyboard'>
      {KEYBOARD_LAYOUT.map((row)=>(
        <p className='keyboard-row'>
          {row.map((currentKey)=>(
            <span className={`keyboard-key${" "+keyboardStatus[currentKey]??''}`}>{currentKey}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
