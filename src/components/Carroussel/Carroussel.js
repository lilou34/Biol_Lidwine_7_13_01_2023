import React, { useState } from "react"
import css from "./Carroussel.module.scss"
import flecheDroite from "../../assets/images/Droite.webp"
import flecheGauche from "../../assets/images/Gauche.webp"

const Carroussel = ({ pictures }) => {
  /** state */
  const [current, updateCurrent] = useState(0)
  /** va calculer la longueur du tableau */
  const longueur = pictures.length

  /** si on arrive a la dernière image on passe sur la 1ere image sinon on passe à la suivante */
  const suivante = () => {
    updateCurrent(current === longueur - 1 ? 0 : current + 1)
  }
  //
  const precedente = () => {
    updateCurrent(current === 0 ? longueur - 1 : current - 1)
  }

  return (
    <article className={css.contain}>
      {pictures.map((picture, index) => {
        return (
          <div key={index} className={index === current ? "active" : ""}>
            {index === current && (
              <img src={picture} alt="Logement" className={css.image} />
            )}{" "}
            
          </div>
        )
      })}
      {/**affichage compteur et flèches  si plus d'une photo */}
      {longueur > 1 ? (
        <>
        <p className={css.counter}>
              {current +1} / {longueur}
            </p>
          <div className={css.precedente} onClick={precedente}>
          {/* eslint-disable-next-line */}
            <img
              src={flecheGauche}
              alt="flèche direction gauche equivaut a image précédente"
              className={css.flecheGauche}
            />
          </div>
          <div className={css.suivante} onClick={suivante}>
            {/* eslint-disable-next-line */}
            <img
              src={flecheDroite}
              alt="flèche direction droite equivaut a image suivante"
              className={css.flecheDroite}
            />
          </div>
        </>
      ) : null}
    </article>
  )
}
export default Carroussel
