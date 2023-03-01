import React from "react"
import css from "./Home.module.scss"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import img from '../../assets/images/desktophome.webp'
const Home = () => {
  return (
    <>
      <section className={css.main}>
        <Banner className={css.banner} titre={'Chez vous, partout et ailleurs'} image={img}/>
        <Card />
      </section>
    </>
  )
}

export default Home
