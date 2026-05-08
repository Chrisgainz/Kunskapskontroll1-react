import React from 'react'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../api/characterApi';
import CharacterDetails from "../components/CharacterDetails";

const CharacterDetailsPage = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchCharacter = async () => {

            try {
                const data = await getById(id);
                setCharacter(data); }

            catch (err) { setError(err.message); }

            finally { setLoading(false); }
        }

        fetchCharacter();

    }, [id]);

    if (loading) { return <h2> Trollar fram karaktär... </h2> }

    if (error) { return (<h2> {error}</h2>); }

    if (!character) { return (<h2>Ingen karaktär hittades.</h2>); }


    return ( <div className="character-details-page"> <CharacterDetails character={character} /> </div>

    );
};

export default CharacterDetailsPage