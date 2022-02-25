import { useState } from "react";
import MovieDBContext from ".";
import movieDBApi from "../../api/movieDB";

export default function MovieDBProvider({ children }) {
    const [carousel, setCarousel] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
    const [peliculas, setPeliculas] = useState([]);
    const [series, setSeries] = useState([]);
    const [pelicula, setPelicula] = useState([]);
    const [serie, setSerie] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    const find = async ( query ) => {
        try {
            const peliculasResponse = await movieDBApi('/search/movie', `${query}`);
            const seriesResponse = await movieDBApi('/search/tv', `${query}`);
            const busquedaResponse = [];
            const popularityArray = [];

            await peliculasResponse.data.results?.map((value, index) => {
                value.type = 0;
                busquedaResponse.push(value);
            });

            await seriesResponse.data.results?.map((value, index) => {
                value.type = 1;
                busquedaResponse.push(value);
            });
            
            busquedaResponse.sort((a, b) => b.popularity - a.popularity);

            setBusqueda(busquedaResponse);
        } catch (error) {
            setBusqueda([]);
        }
    }

    const getPeliculas = async ( params ) => {
        try {
            const peliculasResponse = await movieDBApi(`/movie/${params}`);
            setPeliculas(peliculasResponse.data.results.slice(0, 4));
        } catch (error) {
            setPeliculas([]);
        }
    }

    const getSeries = async ( params ) => {
        try {
            const peliculasResponse = await movieDBApi(`/tv/${params}`);
            setSeries(peliculasResponse.data.results.slice(0, 4));
        } catch (error) {
            setSeries([]);
        }
    }

    const getPelicula = async ( params ) => {
        try {
            const peliculasResponse = await movieDBApi(`/movie/${params}`);
            setPelicula(peliculasResponse.data);
        } catch (error) {
            setPelicula([]);
        }
    }

    const getSerie = async ( params ) => {
        try {
            const peliculasResponse = await movieDBApi(`/tv/${params}`);
            setSerie(peliculasResponse.data);
        } catch (error) {
            setSerie([]);
        }
    }

    const getEpisodes = async ( params ) => {
        try {
            const peliculasResponse = await movieDBApi(`/tv/${params}`);
            setEpisodes(peliculasResponse.data.episodes);
        } catch (error) {
            setEpisodes([]);
        }
    }

    const reset = async () => {
        setPeliculas([]);
        setSeries([]);
        setPelicula([]);
        setSerie([]);
        setEpisodes([]);
    }

    return (
        <MovieDBContext.Provider value={{ find, getPelicula, getSerie, getPeliculas, getSeries, getEpisodes, reset, busqueda, pelicula, serie, peliculas, series, episodes }}>
            {children}
        </MovieDBContext.Provider>
    );
}