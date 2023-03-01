import React from 'react';
import css from "./Host.module.scss";


const Host = ({host}) => {
    return (
        <article className={css.host}>
        <p className={css.nom}>{host.name}</p>
        <img
          src={host.picture}
          // eslint-disable-next-line
          alt="profil auteur"
          
        />
        </article>
    );
};

export default Host;