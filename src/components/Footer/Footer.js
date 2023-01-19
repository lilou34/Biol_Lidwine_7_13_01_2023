import React from 'react';
import logo from '../../assets/images/LOGO blanc.webp';
// eslint-disable-next-line
import css from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
        <img src={ logo } alt="logo Kasa blanc sur fond noir" />
            <p>© 2020 Kasa. Tous droits réservés</p>
        </footer>
    );
};

export default Footer;