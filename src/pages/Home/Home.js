import React from "react"
import Header from "../../components/Header/Header"
import css from "./Home.module.scss"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Card from "../../components/Card/Card"
const Home = () => {
  return (
    <main className={css.main}>
      <section className={css.corps}>
        <Header />
        <Banner />
        <Card />
      </section>
      <Footer />
    </main>
  )
}

export default Home
