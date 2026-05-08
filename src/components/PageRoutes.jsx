import React from 'react'

import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import CharactersPage from "../pages/CharactersPage"
import CharacterDetailsPage from "../pages/CharacterDetailsPage";
import CreateCharacterPage from "../pages/CreateCharacterPage";

const PageRoutes = () => {

    return (

        <Routes>


          <Route path="/" element={<Home />}></Route>

          <Route path="/characters" element={<CharactersPage />}></Route>

          <Route path="/characters/:id" element={<CharacterDetailsPage />}></Route>

          <Route path="/characters/create" element={<CreateCharacterPage />}></Route>
  
        
        </Routes>

  )
}

export default PageRoutes