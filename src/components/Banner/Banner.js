import React from "react"

import css from "./Banner.module.scss"

const Banner = (props) => {
  return (
    <article className={css.contain}>
      <h1>{props.titre}</h1>
      <img src={props.image} alt="Paysage" className={css.img} />
    </article>
  )
}

export default Banner
