import { faBars, faFilm, faHome, faSearch, faSignInAlt, faTv, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, KeyboardEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { ItemList } from "./components/ItemList";
import { MenuLogo } from "./components/MenuLogo";

export const Menu = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const handleMenuClick = () => {
        setIsActive(!isActive)
    }

    const keyUpSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${e.currentTarget.value}`);
            setIsActive(false);
            e.currentTarget.value = '';
        }
    }

    return (
        <nav className={`menu ${isActive ? "active" : ""}`}>
            <MenuLogo onActiveMenu={handleMenuClick} icon={faBars} />
            <ul className="menu__lista">
                <ItemList icon={faHome} name="Inicio" route="home" />
                <ItemList icon={faSearch} name="buscar" search={true} onActiveMenu={handleMenuClick} onSearch={keyUpSearch} />
                <ItemList icon={faFilm} name="Películas" route="movies" />
                <ItemList icon={faTv} name="Series" route="series" />
                <ItemList icon={faUser} name="Perfil" route="perfil" />
                <ItemList icon={faSignInAlt} name="Iniciar Sesión" route="login" lastItem={true} />
            </ul>
        </nav>
    )
}