import React, { useState, useEffect, useContext } from "react";
import PostDetalle from "./components/PostDetalle/PostDetalle";
import MovieDBContext from "../../context/movieDB";

import './Post.css';
import { useLocation, useParams } from "react-router-dom";
import Popular from "../Seccion/components/Popular";
import Seccion from "../Seccion";
import Descargas from "../Seccion/components/Descargas";
import Spinner from "../Spinner";

export default function Post({ isSerie }) {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [isLoad, setIsLoad] = useState(false);
    const { getPelicula, getSerie, getPeliculas, getSeries, reset, pelicula, serie, peliculas, series } = useContext(MovieDBContext);

    useEffect(async () => {
        window.scrollTo(0, 0);
        if (isSerie) {
            await getSerie(`${id}`).catch(null);
            await getSeries(`${id}/similar`).catch(null);
        }
        else {
            await getPelicula(`${id}`).catch(null);
            await getPeliculas(`${id}/similar`).catch(null);
        }
        setIsLoad(true);
    }, []);

    useEffect(async () => {
        if (serie.id !== parseInt(id)) {

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
    }, [pathname]);

    return (
        <React.Fragment>
            <Spinner isLoad={isLoad} />
            {isSerie ? (
                <React.Fragment>
                    <PostDetalle bgImage={serie.backdrop_path} poster={serie.poster_path} title={serie.name} originalTitle={serie.original_name} genres={serie.genres} synopsis={serie.overview} />
                    <Seccion title="Descargas" content={<Descargas isSerie={true} seasons={serie.seasons} />} />
                    <Seccion title="Series Similares" content={<Popular data={series} isSerie={true} />} />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <PostDetalle bgImage={pelicula.backdrop_path} poster={pelicula.poster_path} title={pelicula.title} originalTitle={pelicula.original_title} genres={pelicula.genres} synopsis={pelicula.overview} />
                    <Seccion title="Descargas" content={<Descargas />} />
                    <Seccion title="Películas Similares" content={<Popular data={peliculas} />} />
                </React.Fragment>
            )}
        </React.Fragment>
    );
}