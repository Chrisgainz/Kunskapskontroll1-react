import React from 'react'

import Character from "./Character";

const CharacterList = ( {characters} ) => {
    
  return (
    <div className="character-container">

     {characters.map(
        (character) => (
            
            <Character key={character.index}
            character={character}
            />
        ))}

    </div>
  );
}

export default CharacterList