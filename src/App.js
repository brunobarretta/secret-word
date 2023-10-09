//css
import './App.css';

//react
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from "./data/data"

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"}
]


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)


  return (
    <div className="App">
      <h2>
        {gameStage === "start" && <StartScreen />}
        {gameStage === "game" && <Game />}
        {gameStage === "end" && <GameOver />}
      </h2>
    </div>
  );
}

export default App;
