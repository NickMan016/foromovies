import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuLogo({icon, onActiveMenu}) {
    return (
        <div className="contenedor__logo">
            <div className="logo">
                <a href="#" className="nombre__logo">ForoMovies</a>
            </div>
            <i className="menu__btn" onClick={onActiveMenu}>
                <FontAwesomeIcon icon={icon} />
            </i>
        </div>
    );
}