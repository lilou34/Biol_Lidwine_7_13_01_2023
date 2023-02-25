import React from "react"
import Logo from "../../../assets/images/LOGOOrange.webp"
import { NavLink } from "react-router-dom"
import css from "./Header.module.scss"

const Header = () => {
  
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <NavLink end to="/">
          <img src={Logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            end
            to="/"
            // className={(nav) => (nav.isActive ? "activeLink" : "")}
            className={({isActive}) => (isActive ? css.active : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/about"
            // className={(nav) => (nav.isActive ? "activeLink" : "")}
            className={({isActive}) => (isActive ? css.active : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
