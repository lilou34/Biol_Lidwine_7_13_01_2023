import React from 'react';
import orange from '../../assets/images/etoileOrange.webp';
import gris from '../../assets/images/etoileGrise.webp';
import css from './Rate.module.scss';

const Rate = ({rate}) => {
    
    const stars = [1,2,3,4,5];

    return (
        <div className={css.section}>
        {stars.map((star) =>
rate >= star ? (
<img src={orange} alt="étoile orange equivaut attribution d'un point" key={star} />
) : (
<img src={gris} alt="étoile grise équivaut au point non attribué sur 5" key={star}  />
))}

        </div>
    )
}

export default Rate;