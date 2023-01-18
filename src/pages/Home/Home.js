import React from 'react';
import Header from '../../components/Header/Header';
import css from './Home.module.scss';
import image from '../../assets/images/mobHome.webp'

const Home = () => {
    return (
        <main>
            <Header />
            <section>
        <h2>Chez vous, partout et ailleurs</h2>
        <img
          src={image}
          alt="Paysage"
          className={css.img}
        />
      </section>
        </main>
    );
};

export default Home;