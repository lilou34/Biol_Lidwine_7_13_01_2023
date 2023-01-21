import React from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Carroussel from "../../components/Carroussel/Carroussel"
//import Collapse from "../../components/Collapse/Collapse"
import Footer from "../../components/Footer/Footer"
import Data from "../../logements.json"
import css from "./FicheLogement.module.scss"

const FicheLogement = () => {
  //recup id dans url
  const { id } = useParams();
  //find cherche dans le tableau celui qui a le meme id et récupérer les infos
const logement = Data.find((logement) => logement.id === id)
// décla de variable et assignation de la valeur
// eslint-disable-next-line
const { title, location, rating, host, equipments, description, pictures } =
logement;

  return (
    <main className={css.main}>
      <section className={css.corps}>
        <Header />
        <Carroussel  props={pictures}/>
        <h1>{title}</h1>
      </section>
      <Footer />
    </main>
  )
}

export default FicheLogement
