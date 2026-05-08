import React from 'react'
import { useEffect, useState } from 'react'
import loadingpic from "../assets/loadingpic.png"

import CharacterList from "../components/CharacterList";

import { getAll, deleteCharacter } from '../api/characterApi'


const CharactersPage = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchCharacters = async () => {

            try { const data = await getAll(); setCharacters(data); }

            catch (err) { setError(err.message); }

            finally { setLoading(false); }

        };

        fetchCharacters();

    }, []);

    const handleDelete = async (id) => {

        try { const updatedCharacters = await deleteCharacter(characters, id);
             setCharacters(updatedCharacters); }

        catch (err) { setError(err.message); }
    };


    if (loading){ return <div> <img src={loadingpic} alt="Loading..." />;</div>; }

    if (error) { return <h2>{error}</h2>; }


    return (

        <div className="characters-page">

          

            <CharacterList
                characters={characters}
                onDelete={handleDelete}
            />

        </div>

    )
}

export default CharactersPage