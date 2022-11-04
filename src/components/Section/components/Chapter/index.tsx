import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFrown, faInfoCircle, faLink } from "@fortawesome/free-solid-svg-icons";

interface ChapterProps {
    title: string,
    bgImage: string | null,
    index: number
}

export const Chapter = ({ title, bgImage, index }: ChapterProps) => {
    const [isActiveChapter, setIsActiveChapter] = useState(false);
    const handleChapterClick = () => {
        setIsActiveChapter(!isActiveChapter);
    }

    return (
        <div className="transition-all duration-500 mb-1">
            <div className="bg-[#424242] p-5 cursor-pointer" onClick={handleChapterClick}>{`Capitulo ${index} - ${title}`}
                <i className="float-right text-lg transition-all duration-500 ease-in-out"><FontAwesomeIcon icon={faChevronDown} /></i>
            </div>
            <div className={`relative transition-all duration-500 ease-in-out ${isActiveChapter ? "h-64 overflow-y-scroll" : "overflow-hidden h-0"}`}>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://image.tmdb.org/t/p/w500/${bgImage}")`}} className="absolute w-full h-full bg-no-repeat bg-cover blur-sm -z-10"></div>
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
                        <tr className="text-center hover:bg-[#424242]">
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
                        <tr className="text-center hover:bg-[#424242]">
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
            </div>
        </div>
    )
}