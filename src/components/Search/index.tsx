import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MovieDBContext } from "../../context/MovieDBContext";
import { MoviePopular, SeriePopular } from "../../interfaces/MovieDBInterfaces";
import { Section } from "../Section"
import { ItemPopular } from "../Section/components/ItemPopular";
import { Spinner } from "../Spinner"

export const Search = () => {
    const { pathname } = useLocation();
    const { query } = useParams();
    const [isLoad, setIsLoad] = useState(false);
    const { find, busqueda } = useContext(MovieDBContext);

    const load = async () => {
        window.scrollTo(0, 0);
        await find(query || '').catch(null);
        setIsLoad(true);
    }

    useEffect(() => {
        load();
    }, [])

    useEffect(() => {
        setIsLoad(false);
        load();
    }, [pathname])

    return (
        <>
            <Spinner isLoad={isLoad} />
            {isLoad && busqueda.length != 0 ? (
                <Section title={`Resultado de búsqueda: ${query}`} content={
                    <div className="grid w-full mt-5 grid-cols-4 gap-10">
                        {
                            busqueda.map((value, index) => (
                                <>
                                    {
                                        value.type === 1 ? (
                                            <ItemPopular key={index} id={value.id} title={value.name} srcImage={value.poster_path} isSerie={true} />
                                        ) : (
                                            <ItemPopular key={index} id={value.id} title={value.title} srcImage={value.poster_path} />
                                        )
                                    }
                                </>
                            ))
                        }
                    </div>
                } />
            ) : undefined}

            {isLoad && busqueda.length === 0 ? (
                <Section title={`Resultado de búsqueda: ${query}`} content={<p className="text-2xl">No se encontraron resultados con tu búsqueda</p>} />
            ) : undefined}
        </>
    )
}