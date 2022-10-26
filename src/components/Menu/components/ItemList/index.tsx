import { useEffect, useState, MouseEventHandler, KeyboardEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink, useLocation } from 'react-router-dom';

export interface ItemListProps {
    icon: IconProp,
    name: string,
    route?: string,
    search?: boolean,
    lastItem?: boolean,
    onActiveMenu?: MouseEventHandler<HTMLElement>,
    onSearch?: KeyboardEventHandler<HTMLInputElement>
}

export const ItemList = ({ icon, name, route, search, lastItem, onActiveMenu, onSearch }: ItemListProps) => {

    const { pathname } = useLocation();
    const [searchActive, setSearchActive] = useState(false);

    useEffect(() => {
        if (pathname.split('/')[1] === 'search')
            setSearchActive(true);
        else
            setSearchActive(false);
    
    }, [pathname])

    return (
        <li className={`${lastItem ? "item__ultimo" : ""}`}>
            {search ? (
                <>
                    <i className={`icono__buscar ${searchActive ? "active" : ""}`} onClick={onActiveMenu}>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <input type="text" placeholder="Buscar..." onKeyUp={onSearch} />
                </>
            ) : (
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={`/${route}`}>
                    <i>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <span className="nombre__enlace">{name}</span>
                </NavLink>
            )}
            <span className="tooltip">{name}</span>
        </li>
    )
}