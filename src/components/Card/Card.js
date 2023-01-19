import React from "react"
import { Link } from "react-router-dom"
import Data from "../../logements.json"
import css from "./Card.module.scss"

// récupération des data grace au .map et affichage des informations dynamique
const Card = () => {
  return (
    <section className={css.section}>
      {Data.map((logement) => {
        return (
          <Link
            to={`logement/${logement.id}`}
            key={logement.id}
            className={css.card}
          >
            
            <img src={logement.cover} alt={logement.title} />
              <h2 className={css.title}>{logement.title}</h2>
            
          </Link>
        )
      })}
    </section>
  )
}

export default Card
