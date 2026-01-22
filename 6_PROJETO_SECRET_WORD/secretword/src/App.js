import './App.css';

import { useCallback, useEffect, useState} from 'react';

import {wordsList} from './data/words';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(gameStage);
  console.log(words);

  return (
    <div className="App">
      {gameStage === stages[0].name && <StartScreen />}
      {gameStage === stages[1].name && <Game />}
      {gameStage === stages[2].name && <GameOver />}
    </div>
  );
}

export default App;
