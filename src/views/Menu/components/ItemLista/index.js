import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';

export default function ItemLista({ icon, name, route, search, lastItem, onActiveMenu, onSearch }) {
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
                <React.Fragment>
                    <i className={`icono__buscar ${searchActive ? "active" : ""}`} onClick={onActiveMenu}>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <input type="text" placeholder="Buscar..." onKeyUp={onSearch} />
                </React.Fragment>
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
    );
}