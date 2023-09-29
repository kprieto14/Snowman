import React from 'react'
//import step_0 from '../public/images/step_0.png'
//import step_1 from '../public/images/step_1.png'
//import step_2 from '../public/images/step_2.png'
//import step_3 from '../public/images/step_3.png'
//import step_4 from '../public/images/step_4.png'
//import step_5 from '../public/images/step_5.png'
//import step_6 from '../public/images/step_6.png'
import step_7 from '../public/images/step_7.png'
import snow from '../public/images/snow.gif'
//import words from './words.json'

export function App() {
  const abcList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  //Create a "word" type?
  const correctWord = ['', '', '', '', '', '', '']

  function handleNewGame() {
    console.log("Clicked!")

    //Grab a random word from json list
    //console log the new word to double check it works
    //Assign its value to an array
    //Will need to update something so that users know a game started
  }

  function handleLetterCheck(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(event.target)

    //Take in input from what the user clicked
    //Compare it to the array of the chosen word
    //Show the correct letters guessed in the correct spot
    //Disable letters guessed whether it was correct or not
    //Update snowman picture
  }

  return (
    <div>
      <header>
        <h1>Snowman</h1>
        <h2>
          <button onClick={handleNewGame}>New Game</button>
        </h2>
      </header>

      <main>
        <div>
          <iframe src={snow} className="gif"></iframe>
          <img src={step_7} alt="Image of snowman" />
        </div>

        <section>
        {correctWord.map((letter, letterIndex) => {
            return (
              <article key={letterIndex}><h3>{letter}</h3></article>
            )
          })
        }
        </section>

        <section className='alphabet'>
          {abcList.map((letter, letterIndex) => {
            return (
              <button key={letterIndex} onClick={handleLetterCheck}>{letter}</button>
              )
            })
          }
        </section>
      </main>

      <h4>Made with 🫶🏽 in Florida</h4>

    </div>
  )
}
