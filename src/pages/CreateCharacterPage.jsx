import React from 'react'
import { useState } from 'react';

import CharacterForm from '../components/CharacterForm';

import Character from '../components/Character';
import { createCharacter } from '../api/characterApi';

const CreateCharacterPage = () => {

    const [message, setMessage] = useState("");
    const [createdCharacter, setCreatedCharacter] = useState(null);

    const handleCreate = async (data) => {

        try {

            const newCharacter = await createCharacter(data);

            setCreatedCharacter(newCharacter);

            setMessage("Karaktären har skapats!");
        }

        catch (err) { setMessage(err.message); }
    }

    return (

        <div className="create-character-page">

            <h2> Skapa en ny karaktär </h2>

            <CharacterForm onSubmit={handleCreate} />

            <p>{message}</p>

            {createdCharacter && ( <Character character={createdCharacter}

                showDetails={false} showDelete={false} /> )}

        </div>
    )
}

export default CreateCharacterPage