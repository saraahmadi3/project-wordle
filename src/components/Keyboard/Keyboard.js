import React from 'react';
import { KEYBOARD_LAYOUT } from '../../constants';

function Keyboard({keyboardStatus}) {
  return (
    <div className='keyboard'>
      {KEYBOARD_LAYOUT.map((row,indexRow)=>(
        <p key={indexRow} className='keyboard-row'>
          {row.map((currentKey,indexCol)=>(
            <span key={indexCol} className={`keyboard-key${" "+keyboardStatus[currentKey]??''}`}>{currentKey}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
