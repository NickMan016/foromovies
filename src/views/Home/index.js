import React, { useContext, useEffect, useState } from "react";

import Carousel from "../Carousel";
import Seccion from "../Seccion";
import Popular from "../Seccion/components/Popular"
import MovieDBContext from "../../context/movieDB";
import Spinner from "../Spinner";

export default function Home() {
    const [isLoad, setIsLoad] = useState(false);
    const { getPeliculas, getSeries, peliculas, series } = useContext(MovieDBContext);

    useEffect(async () => {
        window.scrollTo(0, 0);
        await getPeliculas('popular').catch(null);
        await getSeries('popular').catch(null);
        setIsLoad(true);
    }, [])

    return (
        <React.Fragment>
            <Spinner isLoad={isLoad} />
            {isLoad ? (
                <React.Fragment>
                    <Carousel data={peliculas} />
                    <Seccion title="Películas Populares" content={<Popular data={peliculas} />} />
                    <Seccion title="Series Populares" content={<Popular data={series} isSerie={true} />} />
                </React.Fragment>
            ) : undefined}
        </React.Fragment>
    );
}