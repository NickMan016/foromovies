import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieDBContext from "../../../../context/movieDB";
import Capitulo from "../Capitulo";

export default function Temporada() {
    const { id, idSeason } = useParams();
    const { pathname } = useLocation();
    const { getEpisodes, episodes } = useContext(MovieDBContext);
    const [isActiveChapter, setIsActiveChapter] = useState(false);
    const handleChapterClick = () => {
        setIsActiveChapter(!isActiveChapter)
    }

    useEffect( async () => {
        getEpisodes(`${id}/season/${idSeason}`).catch(null);
    }, []);

    useEffect(() => {
        getEpisodes(`${id}/season/${idSeason}`).catch(null);
    }, [pathname]);

    return (
        <div className={`temporada`}>
            {episodes?.map((value, index) => {
                return (
                    <Capitulo key={index} title={value.name} index={value.episode_number} onActiveChapter={handleChapterClick} />
                );
            })}
        </div>
    )
}