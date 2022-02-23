import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import MovieDBContext from "../../context/movieDB";
import Seccion from "../Seccion";
import Popular from "../Seccion/components/Popular";
import Spinner from "../Spinner";

export default function Search() {
    const { pathname } = useLocation();
    const { query } = useParams();
    const [isLoad, setIsLoad] = useState(false);
    const { find, busqueda } = useContext(MovieDBContext);

    useEffect( async () => {
        window.scrollTo(0, 0);
        await find( query );
        setIsLoad(true);
    }, [])

    useEffect( async () => {

        setIsLoad(false);
        window.scrollTo(0, 0);
        await find( query );
        setIsLoad(true);

    }, [pathname])

    return (
        <React.Fragment>
            <Spinner isLoad={isLoad} />
            {isLoad && busqueda.length != 0 ? (
                <Seccion title={`Resultado de búsqueda: ${query}`} content={<Popular data={busqueda} />} />
            ) : undefined}
            
            {isLoad && busqueda.length === 0 ? (
                <Seccion title={`Resultado de búsqueda: ${query}`} content={<p className="subtitulo__seccion">No se encontraron resultados con tu búsqueda</p>} />
            ) : undefined}
        </React.Fragment>
    );
}