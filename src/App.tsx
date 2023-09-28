import React from 'react'
//import step_0 from '../public/images/step_0.png'
import step_7 from '../public/images/step_7.png'

export function App() {
  return (
    <div>
      <header>
        <h1>Snowman</h1>
        <h2>
          <button>New Game</button>
        </h2>
      </header>

      <main>
        <div>
          <iframe src="https://giphy.com/embed/rcUnyhf25Bu1y" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <img src={step_7} alt="Image of a fully built snowman with all parts" />
          <p><a href="https://giphy.com/stickers/snow-rcUnyhf25Bu1y">via GIPHY</a></p>
        </div>

        <section>
          <article><h3>R</h3></article>
          <article><h3>A</h3></article>
          <article><h3>N</h3></article>
          <article><h3>D</h3></article>
          <article><h3>O</h3></article>
          <article><h3>M</h3></article>
          <article><h3>S</h3></article>
        </section>

        <section className='alphabet'>
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
          <button>E</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>I</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>M</button>
          <button>N</button>
          <button>O</button>
          <button>P</button>
          <button>Q</button>
          <button>R</button>
          <button>S</button>
          <button>T</button>
          <button>U</button>
          <button>V</button>
          <button>W</button>
          <button>X</button>
          <button>Y</button>
          <button>Z</button>
        </section>
      </main>

      <h4>Made with 🫶🏽 in Florida</h4>

    </div>
  )
}
