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

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  // starts the secret word game
  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  // starts the secret word game
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory()

    //create an array of letters
    let wordLetters = word.toLowerCase().split("")

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // process the letter input
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      <h2>
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver retry={retry}/>}
      </h2>
    </div>
  );
}

export default App;
