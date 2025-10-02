import { useState } from 'react';
import Game from '../Game';
import Header from '../Header';
import { sample } from '../../utils';
import { WORDS } from '../../data';

const initialAnswer = sample(WORDS);
const initialGameId = 0;

console.info({ initialAnswer,initialGameId });



function App() {
  const [answer, setAnswer] = useState(initialAnswer)
  const [gameId, setGameId] =useState(initialGameId)

  function handleRestart() {
    const newAnswer = sample(WORDS)
    console.info({ newAnswer,gameId });

    setAnswer(newAnswer)
    setGameId(prev=>prev+1)
  }
  
  return (
    <div className="wrapper">
      <Header handleRestart={handleRestart} />

      <div className="game-wrapper">
        {/* changing the key creates a new instance?  and every state inside it resets*/}
        <Game key={gameId} answer={answer} /> 
      </div>
    </div>
  );
}

export default App;
