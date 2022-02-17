import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';

import './Descargas.css'
import React, { useEffect } from 'react';
import Temporada from '../Temporada';
import { NavLink, Outlet } from 'react-router-dom';

export default function Descargas({ isSerie, seasons }) {

    return (
        <div className="contenedor__descargas">
            {isSerie ? (
                <React.Fragment>

                    <ul className="tabs__temporada">
                        {seasons?.map((value, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={`season/${value.season_number}`}>{value.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="contenedor__temporadas">
                        <Outlet />
                    </div>
                </React.Fragment>
            ) : (
                <table className="tabla">
                    <tr className="header__tabla">
                        <th>Usuario</th>
                        <th>Peso</th>
                        <th>Calidad</th>
                        <th>Formato</th>
                        <th>Servidor</th>
                        <th>Acciones</th>
                    </tr>
                    <tbody className="contenedor__tabla">
                        <tr>
                            <td>NicKMan016</td>
                            <td>2.65 GB</td>
                            <td>1080p</td>
                            <td>MKV</td>
                            <td>MEGA</td>
                            <td className="center">
                                <i className="success">
                                    <FontAwesomeIcon icon={faLink} />
                                </i>
                                <i className="info">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </i>
                                <i className="danger">
                                    <FontAwesomeIcon icon={faFrown} />
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>NicKMan016</td>
                            <td>2.65 GB</td>
                            <td>1080p</td>
                            <td>MKV</td>
                            <td>MEGA</td>
                            <td className="center">
                                <i className="success">
                                    <FontAwesomeIcon icon={faLink} />
                                </i>
                                <i className="info">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </i>
                                <i className="danger">
                                    <FontAwesomeIcon icon={faFrown} />
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>NicKMan016</td>
                            <td>2.65 GB</td>
                            <td>1080p</td>
                            <td>MKV</td>
                            <td>MEGA</td>
                            <td className="center">
                                <i className="success">
                                    <FontAwesomeIcon icon={faLink} />
                                </i>
                                <i className="info">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </i>
                                <i className="danger">
                                    <FontAwesomeIcon icon={faFrown} />
                                </i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
            }
        </div >
    );
}