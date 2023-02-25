import React from "react"
import { useParams, Navigate } from "react-router-dom"
import Data from "../../logements.json"
import Carroussel from "../../components/Carroussel/Carroussel"
import Rate from "../../components/Rate/Rate"
import Collapse from "../../components/Collapse/Collapse"
import Host from "../../components/Host/Host"
import Tag from "../../components/Tag/Tag"
import css from "./FicheLogement.module.scss"

const FicheLogement = () => {
  //recup id dans url
  const { id } = useParams()
  //find cherche dans le tableau celui qui a le meme id et récupérer les infos
  const logement = Data.find((logement) => logement.id === id)

  // si id pas bon redirection
  if (!logement) {
    return <Navigate to="/error" />
  }
  // déclaration variable, assignation de propriété des valeur du fichier json
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
    <>
      <main className={css.main}>
        <Carroussel props={pictures} />
        <div className={css.containBig}>
          <div className={css.contain}>
            <h1>{title}</h1>
            <h2>{location}</h2>
            <Tag tags={tags} />
          </div>
          <div className={css.container}>
            <Rate rate={rating} />
            <Host host={host} />
          </div>
        </div>
        <article className={css.list}>
          <Collapse
            name="Description"
            className={css.description}
            description={<p>{description}</p>}
          ></Collapse>
          <Collapse
            name="Équipements"
            className={css.description}
            description={equipments.map((equipment, index) => (
              <div className={css.item} key={index}>
                {equipment}
              </div>
            ))}
          ></Collapse>
        </article>
      </main>
    </>
  )
}

export default FicheLogement
