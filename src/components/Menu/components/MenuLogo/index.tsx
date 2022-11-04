import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { MouseEventHandler } from "react"

interface MenuLogoProps {
    icon: IconProp,
    onActiveMenu: MouseEventHandler
}

export const MenuLogo = ({icon, onActiveMenu}: MenuLogoProps) => {
    return(
        <div className="contenedor__logo">
            <div className="logo">
                <a href="#" className="nombre__logo">ForoMovies</a>
            </div>
            <i className="menu__btn" onClick={onActiveMenu}>
                <FontAwesomeIcon icon={icon} />
            </i>
        </div>
    )
}