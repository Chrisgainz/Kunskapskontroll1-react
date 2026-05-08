import { useState } from "react";

import hp_placeholder
    from "../assets/hp_placeholder.png";

function CharacterForm({
    onSubmit,
    initialData = {},
}) {

    const [fullName, setFullName] = useState(initialData.fullName || "");
    const [house, setHouse] = useState(initialData.hogwartsHouse || "");
    const [image, setImage] = useState(initialData.image || hp_placeholder);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!fullName.trim() || !house.trim()) {
            alert("Alla fält måste fyllas i");
            return;
        }

        onSubmit({ fullName, hogwartsHouse: house, image, });
    };

    return (
        <form onSubmit={handleSubmit}>

            <div>

                <label>Namn</label>

                <input type="text" value={fullName} onChange={(e) =>
                    setFullName(e.target.value)} />

            </div>

            <div>

                <label>Elevhem</label>

                <input type="text" value={house} onChange={(e) =>
                    setHouse(e.target.value)} />

            </div>

            <div>

                <label>Bild URL</label>

                <input type="text" value={image} onChange={(e) =>
                    setImage(e.target.value)} />

            </div>

            <button type="submit">Spara</button>

        </form>
    );
}

export default CharacterForm;