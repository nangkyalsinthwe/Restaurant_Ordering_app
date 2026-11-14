import React from 'react'
import Default from './Components/default.jsx'

function App() {
  return (
    <>
      <header id='hero-header'>
        <div className="header-content">
          <h1>Jimmy's Diner</h1>
          <p>The best burgers and pizzas in town.</p>
        </div>
      </header>
      <Default />
    </>
  )
}

export default App