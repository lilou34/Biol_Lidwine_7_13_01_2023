import React from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Carroussel from "../../components/Carroussel/Carroussel"
//import Collapse from "../../components/Collapse/Collapse"
import Footer from "../../components/Footer/Footer"
import Data from "../../logements.json"
import css from "./FicheLogement.module.scss"
import css2 from "../../components/Collapse/Collapse.module.scss"
import Rate from "../../components/Rate/Rate"
import Collapse from "../../components/Collapse/Collapse"
import Host from "../../components/Host/Host"
import Tag from "../../components/Tag/Tag"

const FicheLogement = () => {
  //recup id dans url
  const { id } = useParams()
  //find cherche dans le tableau celui qui a le meme id et récupérer les infos
  const logement = Data.find((logement) => logement.id === id)
  // variable et assignation de la valeur
  
  const {
    title,
    location,
    rating,
    // eslint-disable-next-line
    host,
    equipments,
    description,
    pictures,
    // eslint-disable-next-line
    tags,
  } = logement
  

  return (
    <main className={css.main}>
      <section className={css.corps}>
        <Header />
        <Carroussel props={pictures} />
        <h1>{title}</h1>
        <h2>{location}</h2>
        <p></p>
        <Tag />
        <Host host={host} />
        <Rate rate={rating} />
        <article className={css2.list}>
          <Collapse label="Description" className={css.label}>
            <p className={css2.text}>{description}</p>
          </Collapse>
          <Collapse label="Équipements" className={css2.label}>
            <p className={css2.text}>{equipments}</p>
          </Collapse>
        </article>
      </section>
      <Footer />
    </main>
  )
}

export default FicheLogement
