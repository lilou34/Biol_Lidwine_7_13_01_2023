import React from 'react';

import css from './Banner.module.scss';

const Banner = (props) => {
    return (
        <section className={css.section}>
        <h1>{props.titre}</h1>
        <img
          src={props.image}
          alt="Paysage"
          className={css.img}
        />
        
      </section>
    );
};

export default Banner;