import React from 'react'

import DetailsButton from './DetailsButton'

const Character = ( {character} ) => {
  return (
    
    <div className="character-card">

    <img src={character.image} alt={character.fullName} />

    <h2> {character.fullName} </h2>

    <p> Elevhem: {" "} {character.hogwartsHouse} </p>

    <DetailsButton id={character.index} />

    </div>
  )
}

export default Character