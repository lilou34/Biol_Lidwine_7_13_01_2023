import React from "react"
import { Link } from "react-router-dom"

import css from "./Error.module.scss"
const Error = () => {
  return (
    
      <main className={css.error}>
        <h1 className={css.title}>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className={css.return} to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
    
  )
}

export default Error
