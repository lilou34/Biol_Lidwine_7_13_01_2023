import React from "react"
import Header from "../../components/Header/Header"
import css from "./Home.module.scss"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Card from "../../components/Card/Card"
const Home = () => {
  return (
    <>
    <Header />
      <main className={css.main}>
        <Banner />
        <Card />
      </main>
      <Footer />
    </>
  )
}

export default Home
