import React from "react";
import { useState } from "react";
import { updateCharacter } from "../api/characterApi";

const CharacterDetails = ({ character }) => {

    const [isEditing,
        setIsEditing] =
        useState(false);

    const [editedCharacter,
        setEditedCharacter] =
        useState({

            fullName: character.fullName || "",

            hogwartsHouse: character.hogwartsHouse || "",

            nickname: character.nickname || "",

            interpretedBy: character.interpretedBy || "",

            image: character.image || "",
        });

    const handleChange = (e) => {

        setEditedCharacter({

            ...editedCharacter,

            [e.target.name]:
                e.target.value,
        });
    };

    const handleToggleEdit = async () => {

        if (isEditing) {

            try {

                const updatedCharacter = await updateCharacter(
                    character.index,
                    editedCharacter
                );

                setEditedCharacter(updatedCharacter);

            } catch (err) { console.log(err.message); }
        }

        setIsEditing(!isEditing);
    };

    return (

        <div>

            <img src={editedCharacter.image} alt={editedCharacter.fullName} />

            <div>

                <label>Namn:</label>

                <input type="text" name="fullName" value={editedCharacter.fullName}
                    onChange={handleChange} disabled={!isEditing} />

            </div>

            <div>

                <label>Hus:</label>

                <input type="text" name="hogwartsHouse" value={editedCharacter.hogwartsHouse}
                    onChange={handleChange} disabled={!isEditing} />

            </div>

            <div>

                <label>Smeknamn:</label>

                <input type="text" name="nickname" value={editedCharacter.nickname}
                    onChange={handleChange} disabled={!isEditing} />

            </div>

            <div>

                <label>Spelad av:</label>

                <input type="text" name="interpretedBy" value={editedCharacter.interpretedBy}
                    onChange={handleChange} disabled={!isEditing} />

            </div>

            <div>

                <label>Bild URL:</label>

                <input type="text" name="image" value={editedCharacter.image}
                    onChange={handleChange} disabled={!isEditing} />

            </div>

            <button
                onClick={handleToggleEdit}
            >
                {isEditing ? "Spara" : "Redigera"}

            </button>

        </div>
    );
};

export default CharacterDetails;