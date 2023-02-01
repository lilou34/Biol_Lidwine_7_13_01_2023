import React from "react"
import css from "./Tag.module.scss"
import Data from "../../logements.json"
import { useParams } from "react-router-dom"
const Tag = () => {
  //recup id dans url
  const { id } = useParams()
  //find cherche dans le tableau celui qui a le meme id et récupérer les infos
  const logement = Data.find((logement) => logement.id === id)
  // variable et assignation de la valeur
  // eslint-disable-next-line
  const { tags } = logement

  const tag = logement.tags
  return (
    <ul className={css.tagContain}>
      {tag.map((tag, index) => {
        return (
          <li className={css.tag} key={index}>
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

export default Tag
