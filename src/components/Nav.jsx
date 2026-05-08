import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (

        <nav>

            <NavLink to="/">Hem</NavLink>

            {" - "}

            <NavLink to="/characters">Karaktärer</NavLink>

             {" - "}

            <NavLink to="/characters/create">Skapa karaktär</NavLink>

        </nav>
    )
}

export default Nav