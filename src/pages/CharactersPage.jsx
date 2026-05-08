import React from 'react'
import { useEffect, useState } from 'react'

import CharacterList from "../components/CharacterList";

import { getAll } from '../api/characterApi'


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


    if (loading) { return <h2>Trollar fram karaktärer</h2>; }

    if (error) { return <h2>{error}</h2>; }


    return (

        <div>

            <h1>Alla trollkarlar och häxor</h1>

            <CharacterList
                characters={characters}
            />

        </div>

    )
}

export default CharactersPage