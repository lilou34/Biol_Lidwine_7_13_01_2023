import React from "react"
import Header from "../../components/Header/Header"
import css from "./About.module.scss"
import image from "../../assets/images/mobApropos.webp"

const About = () => {
  return (
    <main className={css.main}>
      <Header />
      <section className={css.section}>
        <img src={image} alt="Paysage" className={css.img} />
      </section>
    </main>
  )
}

export default About