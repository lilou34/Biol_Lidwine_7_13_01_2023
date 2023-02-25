import React, { useState } from "react"
import Haut from "../../assets/images/Haut.webp"
import Bas from "../../assets/images/Bas.webp"
import css from "./Collapse.module.scss"

function Collapse(props) {
  const [open, setOpen] = useState(true)

  return open ? (
    <article className={css.collapse}>
      <button className={css.button} onClick={() => setOpen(false)}>
        {props.name}
        <img src={Bas} alt="flèche qui descend" className={css.fleche}></img>
      </button>
    </article>
  ) : (
    <article className={css.collapse}>
      <button className={css.button} onClick={() => setOpen(true)}>
        {props.name}
        <img src={Haut} alt="flèche qui monte" className={css.fleche}></img>
      </button>
      <div className={css.description}>{props.description}</div>
    </article>
  )
}

export default Collapse
