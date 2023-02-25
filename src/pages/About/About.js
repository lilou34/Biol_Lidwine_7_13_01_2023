import React from "react"
import css from "./About.module.scss"
import Collapse from "../../components/Collapse/Collapse"
import Banner from "../../components/Banner/Banner"
import img from '../../assets/images/desktopabout.webp'

const About = () => {
  return (
    <main className={css.main}>
      <section className={css.section}>
      <Banner titre={''} image={img}/>
        
        
      </section>
      <section className={css.collapseList}>
        <Collapse
          name="Fiabilité"
          description={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
        />
        <Collapse
          name="Respect"
          description={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          name="Service"
          description={
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          }
        />
        <Collapse
          name="Sécurité"
          description={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </section>
    </main>
  )
}

export default About
