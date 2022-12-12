import { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useLocation, useParams } from "react-router-dom";
import { MovieDBContext } from "../../../../context/MovieDBContext";
import { Chapter } from "../Chapter";

export const Season = () => {
    const { id, idSeason } = useParams();
    const { pathname } = useLocation();
    const { getSeasonDetail, season } = useContext(MovieDBContext);
    const [isLoad, setIsLoad] = useState(false);

    const load = async () => {
        await getSeasonDetail(`${id}/season/${idSeason}`).catch(null);
        setIsLoad(true)
    }

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        setIsLoad(false)
        load();
    }, [pathname]);

    return (
        <div className="w-full block">
            {
                isLoad ? (
                    <>
                        {
                            season.episodes.map((value, index) => (
                                <Chapter key={index} title={value.name} bgImage={value.still_path} index={value.episode_number} synopsis={value.overview} guest_actors={value.guest_stars} />
                            ))
                        }
                    </>
                ) : (
                    <div className="relative h-[300px] flex items-center justify-center flex-col">
                        <Oval color="#fff" secondaryColor="#AFAFAF" height={80} width={80} />
                        <span className="block text-xl mt-4">Cargando Capitulos...</span>
                    </div>
                )
            }
        </div>
    )
}