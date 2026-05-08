import { BrowserRouter, Routes, Route } from "react-router-dom"


import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRoutes from "./components/PageRoutes";



const App = () => {

  return (

    <BrowserRouter>

      <Header />

      <main>

        <PageRoutes />

      </main>

      <Footer />

    </BrowserRouter>



  );

}

export default App;