import React from "react"
import css from "./Tag.module.scss"

const Tag = ({ tags }) => {
  return (
    <ul className={css.tagContain}>
      <li className={css.tags}>{tags}</li>
    </ul>
  )
}

export default Tag
