import React from "react"
import Header from "../../components/Header/Header"

import CollapseList from "../../components/Collapse/CollapseList"
import Footer from "../../components/Footer/Footer"
import css from "./About.module.scss"
import bannerMobile from "../../assets/images/mobApropos.webp"
import bannerDesktop from "../../assets/images/deskApropos.webp"

const About = () => {
  return (
    <main className={css.main}>
      <Header />
      <section className={css.section}>
        <img src={bannerMobile} alt="Paysage" className={css.bannerMobile} />
        <img src={bannerDesktop} alt="Paysage" className={css.bannerDesktop} />
        <CollapseList />
      </section>
      <Footer />
    </main>
  )
}

export default About
