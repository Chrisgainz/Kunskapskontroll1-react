import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav";

import Home from "./pages/Home";
import CharactersPage from "./pages/CharactersPage"
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

const App = () => {

  return (

    <BrowserRouter>

      <Nav />

      <Routes>

        <Route path="/" element={<Home />}></Route>

        <Route path="/characters" element={<CharactersPage />}></Route>

        <Route path="/characters/:id" element={<CharacterDetailsPage />}></Route>

      </Routes>

    </BrowserRouter>



  );

}

export default App;