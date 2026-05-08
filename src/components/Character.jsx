import React from 'react'

import DetailsButton from './DetailsButton'
import DeleteButton from './DeleteButton'

const Character = ( {character, showDetails = true, showDelete = true, onDelete} ) => {
  return (
    
    <div className="character-card">

    <img src={character.image} alt={character.fullName} />

    <h2> {character.fullName} </h2>

    <p> Elevhem: {" "} {character.hogwartsHouse} </p>

      {showDetails && <DetailsButton id={character.index} />}

      {showDelete &&<DeleteButton id={character.index} onDelete={onDelete} /> }

    </div>
  )
}

export default Character