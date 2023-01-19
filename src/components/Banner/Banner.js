import React from 'react';
import image from '../../assets/images/mobHome.webp';
import css from './Banner.module.scss';

const Banner = () => {
    return (
        <section className={css.section}>
        <h1>Chez vous, partout et ailleurs</h1>
        <img
          src={image}
          alt="Paysage"
          className={css.img}
        />
      </section>
    );
};

export default Banner;