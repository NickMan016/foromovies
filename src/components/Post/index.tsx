import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MovieDBContext } from "../../context/MovieDBContext";
import { Section } from "../Section";
import { Downloads } from "../Section/components/Downloads";
import { ItemPopular } from "../Section/components/ItemPopular";
import { Spinner } from "../Spinner"
import { PostDetail } from "./components/PostDetail";

interface PostProps {
    isSerie?: boolean
}

export const Post = ({ isSerie }: PostProps) => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [isLoad, setIsLoad] = useState(false);
    const { getPelicula, getSerie, getPeliculas, getSeries, pelicula, serie, peliculas, series, reset } = useContext(MovieDBContext);

    useEffect(() => {

        const load = async () => {
            window.scrollTo(0, 0);
            if (isSerie) {
                await getSerie(`${id}`);
                await getSeries(`${id}/similar`);
            }
            else {
                await getPelicula(`${id}`).catch(null);
                await getPeliculas(`${id}/similar`).catch(null);
            }
            setIsLoad(true);
        }

        load();
    }, []);

    useEffect(() => {
        const load = async () => {
            if (serie.id !== parseInt(id || "")) {

                setIsLoad(false);
                window.scrollTo(0, 0);
                reset();
                if (isSerie) {
                    await getSerie(`${id}`).catch(null);
                    await getSeries(`${id}/similar`).catch(null);
                }
                else {
                    await getPelicula(`${id}`).catch(null);
                    await getPeliculas(`${id}/similar`).catch(null);
                }

                setIsLoad(true);
            }
        }

        load();
    }, [pathname]);

    return (
        <>
            <Spinner isLoad={isLoad} />
            {isSerie ? (
                <>
                    <PostDetail bgImage={serie.backdrop_path} poster={serie.poster_path} title={serie.name} originalTitle={serie.original_name} genres={serie.genres} synopsis={serie.overview} />
                    <Section title="Descargas" content={<Downloads isSerie={true} seasons={serie.seasons} />} />
                    <Section title="Series Similares" content={
                        <div className="grid w-full mt-5 grid-cols-4 gap-10">
                            {
                                series.map((value, index) => (
                                    <ItemPopular key={index} id={value.id} title={value.name} srcImage={value.poster_path} isSerie={true} />
                                ))
                            }
                        </div>
                    } />
                </>
            ) : (
                <>
                    <PostDetail bgImage={pelicula.backdrop_path} poster={pelicula.poster_path} title={pelicula.title} originalTitle={pelicula.original_title} genres={pelicula.genres} synopsis={pelicula.overview} />
                    <Section title="Descargas" content={<Downloads />} />
                    <Section title="Películas Similares" content={
                        <div className="grid w-full mt-5 grid-cols-4 gap-10">
                            {
                                peliculas.map((value, index) => (
                                    <ItemPopular key={index} id={value.id} title={value.title} srcImage={value.poster_path} />
                                ))
                            }
                        </div>
                    } />
                </>
            )}
        </>
    )
}