import React from 'react'
import "./StartScreen.css";


function StartScreen({startGame}) {
  return (
    <div className='start'><h1>Mortal  Word</h1>
    <p>Se tem coragem, clique no botão abaixo para continuar...</p>
    <button onClick={startGame}>Começar o jogo</button>
    
    </div>
  )
}

export default StartScreen