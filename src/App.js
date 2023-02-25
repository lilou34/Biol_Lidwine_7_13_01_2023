import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import FicheLogement from "./pages/FicheLogement/FicheLogement"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
