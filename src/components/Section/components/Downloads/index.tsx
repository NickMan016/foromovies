import { faFrown, faInfoCircle, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, Outlet } from "react-router-dom"
import { season } from "../../../../interfaces/MovieDBInterfaces"

interface DownloadsProps {
    isSerie?: boolean,
    seasons?: season[]
}

export const Downloads = ({ isSerie, seasons }: DownloadsProps) => {
    return(
        <div className="">
            {isSerie ? (
                <>

                    <ul className="w-full bg-[#1a1a1a] flex flex-row justify-start items-center whitespace-nowrap overflow-auto">
                        {seasons?.map((value, index) => {
                            return (
                                <li key={index}>
                                    <NavLink className={({isActive}) => (`inline-block pt-4 pb-[13px] px-5 border-b-[3px] transition-all duration-500 ease-in-out ${isActive ? 'border-white' : 'border-transparent'}`)} to={`season/${value.season_number}`}>{value.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>

                    <Outlet />
                </>
            ) : (
                <table className="max-w-[1100px] w-[90%] m-auto my-5">
                    <tr className="bg-[#1a1a1a]">
                        <th className="max-w-[200px] min-w-[100px] py-3">Usuario</th>
                        <th className="max-w-[200px] min-w-[100px] py-3">Peso</th>
                        <th className="max-w-[200px] min-w-[100px] py-3">Calidad</th>
                        <th className="max-w-[200px] min-w-[100px] py-3">Formato</th>
                        <th className="max-w-[200px] min-w-[100px] py-3">Servidor</th>
                        <th className="max-w-[200px] min-w-[100px] py-3">Acciones</th>
                    </tr>
                    <tbody className="contenedor__tabla">
                        <tr className="border-b-[1px] border-[#1a1a1a] text-center hover:bg-[#424242]">
                            <td className="max-w-[200px] min-w-[100px] py-3">NicKMan016</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">2.65 GB</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">1080p</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">MKV</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">MEGA</td>
                            <td className="">
                                <i className="text-green-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faLink} />
                                </i>
                                <i className="text-blue-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </i>
                                <i className="text-red-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faFrown} />
                                </i>
                            </td>
                        </tr>
                        <tr className="border-b-[1px] border-[#1a1a1a] text-center hover:bg-[#424242]">
                            <td className="max-w-[200px] min-w-[100px] py-3">NicKMan016</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">2.65 GB</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">1080p</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">MKV</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">MEGA</td>
                            <td className="">
                                <i className="text-green-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faLink} />
                                </i>
                                <i className="text-blue-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </i>
                                <i className="text-red-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faFrown} />
                                </i>
                            </td>
                        </tr>
                        <tr className="border-[#1a1a1a] text-center hover:bg-[#424242] last:border-b-[3px]">
                            <td className="max-w-[200px] min-w-[100px] py-3">NicKMan016</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">2.65 GB</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">1080p</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">MKV</td>
                            <td className="max-w-[200px] min-w-[100px] py-3">MEGA</td>
                            <td className="">
                                <i className="text-green-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faLink} />
                                </i>
                                <i className="text-blue-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </i>
                                <i className="text-red-600 mx-[5px]">
                                    <FontAwesomeIcon icon={faFrown} />
                                </i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
            }
        </div >
    )
}