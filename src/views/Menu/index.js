import { useState } from 'react';
import { faBars, faHome, faFilm, faTv, faUser, faSignInAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import './Menu.css';

import MenuLogo from './components/MenuLogo';
import ItemLista from './components/ItemLista';

export default function Menu() {
    const [isActive, setIsActive] = useState(false);
    const handleMenuClick = () => {
        setIsActive(!isActive)
    }
    return (
        <nav className={`menu ${isActive ? "active" : ""}`}>
            <MenuLogo onActiveMenu={handleMenuClick} icon={faBars} />
            <ul className="menu__lista">
                <ItemLista icon={faHome} name="Inicio" route="home" />
                <ItemLista icon={faSearch} name="Buscar" search={true} onActiveMenu={handleMenuClick} />                
                <ItemLista icon={faFilm} name="Películas" route="movies" />
                <ItemLista icon={faTv} name="Series" route="series" />
                <ItemLista icon={faUser} name="Perfil" route="perfil" />
                <ItemLista icon={faSignInAlt} name="Iniciar Sesión" route="login" lastItem={true} />
            </ul>
        </nav>
    );
}