import React from 'react'
import placeholder from "../assets/placeholder.jpg"

const Home = () => {



    return (
        <div className="home-page">

            <h1>Välkommen till Hogwarts!</h1>

            <br />

            <img className="harry-pumper" src={placeholder} alt="Harrypumper" />


        </div>
    )
}

export default Home