import { useContext, useEffect, useState } from "react";
import { MovieDBContext } from "../../context/MovieDBContext";
import { Carousel } from "../Carousel";
import { Section } from "../Section";
import { ItemPopular } from "../Section/components/ItemPopular";
import { Spinner } from "../Spinner";

export const Home = () => {
    const [isLoad, setIsLoad] = useState(false);
    const { getPeliculas, getSeries, peliculas, series } = useContext(MovieDBContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        getPeliculas('popular');
        getSeries('popular');
        setIsLoad(true);

    }, [])

    return (
        <>
            <Spinner isLoad={isLoad} />
            {isLoad ? (
                <>
                    <Carousel data={peliculas} />
                    <Section title="Películas Populares" content={
                        <div className="grid w-full mt-5 grid-cols-4 gap-10">
                            {
                                peliculas.map((value, index) => (
                                    <ItemPopular key={index} id={value.id} title={value.title} srcImage={value.poster_path} />
                                ))
                            }
                        </div>
                    } />
                    <Section title="Series Populares" content={
                        <div className="grid w-full mt-5 grid-cols-4 gap-10">
                            {
                                series.map((value, index) => (
                                    <ItemPopular key={index} id={value.id} title={value.name} srcImage={value.poster_path} isSerie={true} />
                                ))
                            }
                        </div>
                    } />
                </>
            ) : undefined}
        </>
    )
}