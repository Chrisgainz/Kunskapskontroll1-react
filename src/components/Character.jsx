import React from 'react'

import DetailsButton from './DetailsButton'

const Character = ( {character, showDetails = true} ) => {
  return (
    
    <div className="character-card">

    <img src={character.image} alt={character.fullName} />

    <h2> {character.fullName} </h2>

    <p> Elevhem: {" "} {character.hogwartsHouse} </p>

      {showDetails && <DetailsButton id={character.index} />}

    </div>
  )
}

export default Character