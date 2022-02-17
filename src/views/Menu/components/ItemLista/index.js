import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function ItemLista({ icon, name, route, search, lastItem, onActiveMenu }) {
    return (
        <li className={`${lastItem ? "item__ultimo" : ""}`}>
            {search ? (
                <React.Fragment>
                    <i className="icono__buscar" onClick={onActiveMenu}>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <input type="text" placeholder="Buscar..." />
                </React.Fragment>
            ) : (
                <NavLink className={({isActive}) => (isActive ? 'active' : '')} to={`/${route}`}>
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