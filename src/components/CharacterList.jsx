import React from 'react'

import Character from "./Character";

const CharacterList = ( {characters, onDelete} ) => {
    
  return (
    <div className="character-container">

     {characters.map(
        (character) => (
            
            <Character key={character.index}
            character={character}
            onDelete={onDelete}
            />
        ))}

    </div>
  );
}

export default CharacterList