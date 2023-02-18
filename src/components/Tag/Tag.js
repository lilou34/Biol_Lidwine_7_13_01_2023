import React from "react"
import css from "./Tag.module.scss"

const Tag = ({ tags }) => {
  return (
    <ul className={css.tagContain}>
              {tags.map((tags, index) => {
                return (
                  <li className={css.tags} key={index}>
                    {tags}
                  </li>
                );
              })}
            </ul>
   
  )
}

export default Tag
