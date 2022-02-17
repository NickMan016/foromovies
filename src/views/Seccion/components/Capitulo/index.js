import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFrown, faInfoCircle, faLink } from '@fortawesome/free-solid-svg-icons';

export default function Capitulo({title, index}) {
    const [isActiveChapter, setIsActiveChapter] = useState(false);
    const handleChapterClick = () => {
        setIsActiveChapter(!isActiveChapter);
    }

    return (
        <div className="contenedor__capitulo">
            <div className="titulo__capitulo" onClick={handleChapterClick}>{`Capitulo ${index} - ${title}`}
                <i><FontAwesomeIcon icon={ faChevronDown } /></i>
            </div>
            <div className={`contenido__capitulo ${isActiveChapter ? "active" : ""}`}>
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
            </div>
        </div>
    )
}