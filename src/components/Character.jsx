import React from 'react'

const Character = ( {character} ) => {
  return (
    
    <div className="character-card">

    <img src={character.image} alt={character.fullName} />

    <h2> {character.fullName} </h2>

    <p> Elevhem: {" "} {character.hogwartsHouse} </p>

    </div>
  )
}

export default Character