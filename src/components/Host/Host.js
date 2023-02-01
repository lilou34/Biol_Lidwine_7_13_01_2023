import React from 'react';
import css from "./Host.module.scss";


const Host = ({host}) => {
    return (
        <article className={css.host}>
        <p className={css.name}>{host.name}</p>
        <img
          src={host.picture}
          alt="photo profil auteur article"
          className={css.image}
        />
        </article>
    );
};

export default Host;