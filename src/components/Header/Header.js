import React from 'react';

function Header({handleRestart}) {
  return (
    <header>
      <button className='header-button'
        onClick={()=>window.alert('Maybe one day I\'ll implement it 🤷‍♀️\n\nTemporary solution: use Dark Reader Extension, which currently is approved by bouvet!👌')} 
        aria-label='Dark mode button'   // for screen readers 
        title='Dark mode button'        // for tooltip when hover on top of the button
      >
        🌙
      </button>
      <h1>Word Game</h1>
      <button className='header-button' onClick={handleRestart} title='Restart button' aria-label='Restart button'>
        🔄️
      </button>
    </header>
  );
}

export default Header;
