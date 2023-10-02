import React, { useState } from 'react'
import step_0 from '../public/images/step_0.png'
import step_1 from '../public/images/step_1.png'
import step_2 from '../public/images/step_2.png'
import step_3 from '../public/images/step_3.png'
import step_4 from '../public/images/step_4.png'
import step_5 from '../public/images/step_5.png'
import step_6 from '../public/images/step_6.png'
import step_7 from '../public/images/step_7.png'
import snow from '../public/images/snow.gif'
import words from './words.json'

export function App() {
  const abcList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  
  //This word is the hidden correct word that is created when new game button is hit
  const [ correctWord, setCorrectWord ] = useState<string[]>(['', '', '', '', '', '', ''])
  const [ classState, setClassState] = useState<string[]>(['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden'])
  const [ gameState, setGameState ] = useState<'inactive' | 'active' | 'won' | 'new'>('inactive')

  const photoStepArray = [step_0, step_1, step_2, step_3, step_4, step_5, step_6, step_7]
  const [ photoStepCount, setPhotoStepCount ] = useState<number>(7)

  //Keeps track of how many guesses it took the user for fun
  const [ guessCount, setGuessCount ] = useState<number>(0)

  function handleNewGame() {
    //Update photo to start at step_0
    setPhotoStepCount(0)
    //Grabs a random word from JSON list
    setCorrectWord(words[Math.floor(Math.random() * 1024)].toUpperCase().split(''))
    
    //Resets letters to hidden so that user does not need to refresh page
    setClassState(['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden'])
    //Resets letter buttons
    setGameState('new')
  }

  function handleLetterCheck(event: React.MouseEvent<HTMLButtonElement>, letterTile: string) {
    //Check if the game is active or not
    if(gameState === 'inactive' || gameState === 'won') {
      return
    } else if(gameState === 'new') {
      setGameState('active')
    }

    //Compare letter chosen from user to the array
    if(correctWord.includes(letterTile)) {
      //Makes a copy of class state to be set during for loop
      let copiedClassState = Array.from(classState)
      //This counts if there is more than one of the same letter 
      let multiplesOfSameLetterCount = 0

      for(let count = 0; count < correctWord.length; count++) {
        //If correct, Show the correct letters guessed in the correct spot by changing state in classState
        if(correctWord[count] === letterTile) {
          copiedClassState[count] = 'visible'
          
          multiplesOfSameLetterCount++
        }
        //Update snowman picture according to how many double letters there are
        setPhotoStepCount( photoStepCount + multiplesOfSameLetterCount )
        if(photoStepCount + multiplesOfSameLetterCount === 7) {
          setGameState('won')
        }

        setClassState(copiedClassState)
      }
    }

    //Disable button guessed whether it was correct or not
    event.currentTarget.disabled = true
    
    setGuessCount(guessCount + 1)
  }

  return (
    <div>
      <header>
        <h1>Snowman</h1>
        <h2>
          <button onClick={handleNewGame}>New Game</button>
        </h2>
        <p className={gameState === 'inactive' || gameState === 'won' ? 'hidden' : undefined}>Pick a letter, any letter</p>
        <h3 className={gameState === 'won' ? undefined : 'hidden'}>Congratulations! You took <span>{guessCount}</span> guesses 👏🏼</h3>
      </header>

      <main>
        <div>
          <iframe src={snow} className="gif"></iframe>
          <img src={photoStepArray[photoStepCount]} alt="Image of snowman" />
        </div>

        <section>
        {correctWord.map((letter, letterIndex) => {
            return (
              <article key={letterIndex}><h3 className={classState[letterIndex] === 'hidden' ? 'hidden' : undefined}>{letter}</h3></article>
            )
          })
        }
        </section>

        <section className='alphabet'>
          {abcList.map((letter, letterIndex) => {
            return (
              <button key={letterIndex} disabled={gameState === 'new' || gameState === 'active' ? false : undefined} onClick={(event) => handleLetterCheck(event, letter)}>{letter}</button>
            )})
          }
        </section>
      </main>

      <h4>Made with 🫶🏽 in Florida</h4>

    </div>
  )
}
