import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo do Raflix"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo conteúdo
            </Button>
        </nav>
    )
};

export default Menu;
