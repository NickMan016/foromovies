import { useState } from "react";
import { MovieDetail, MoviePopular, SeasonDetail, SerieDetail, SeriePopular } from "../interfaces/MovieDBInterfaces";
import movieDBApi from "./../api/movieDB";
import { MovieDBContext } from "./MovieDBContext";

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const MovieDBProvider = ({ children }: ProviderProps) => {

    const INITIAL_STATE_MOVIE: MovieDetail = {
        adult: false,
        backdrop_path: "",
        belongs_to_collection: [],
        budget: 0,
        genres: [],
        homepage: "",
        id: 0,
        imdb_id: "",
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        release_date: "",
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: "",
        tagline: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0
    }

    const INITIAL_STATE_SERIE: SerieDetail = {
        backdrop_path: "",
        created_by: [],
        episode_run_time: [],
        first_air_date: "",
        genres: [],
        homepage: "",
        id: 0,
        in_production: false,
        languages: [],
        last_air_date: "",
        last_episode_to_air: {
            air_date: "",
            episode_number: 0,
            id: 0,
            name: "",
            overview: "",
            production_code: "",
            season_number: 0,
            still_path: "",
            vote_average: 0,
            vote_count: 0
        },
        name: "",
        next_episode_to_air: null,
        networks: [],
        number_of_episodes: 0,
        number_of_seasons: 0,
        origin_country: [],
        original_language: "",
        original_name: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        seasons: [],
        spoken_languages: [],
        status: "",
        tagline: "",
        type: "",
        vote_average: 0,
        vote_count: 0
    }

    const INITIAL_STATE_SEASON: SeasonDetail = {
        _id: "",
        air_date: "",
        episodes: [],
        name: "",
        overview: "",
        id: 0,
        poster_path: null,
        season_number: 0
    }

    const [peliculas, setPeliculas] = useState<MoviePopular[]>([]);
    const [series, setSeries] = useState<SeriePopular[]>([]);
    const [pelicula, setPelicula] = useState<MovieDetail>(INITIAL_STATE_MOVIE);
    const [serie, setSerie] = useState<SerieDetail>(INITIAL_STATE_SERIE);
    const [season, setSeason] = useState<SeasonDetail>(INITIAL_STATE_SEASON);

    const getPeliculas = async (params: string) => {
        try {
            const peliculasResponse = await movieDBApi(`/movie/${params}`);
            setPeliculas(peliculasResponse?.data.results.slice(0, 4));
        } catch (error) {
            setPeliculas([]);
        }
    }

    const getSeries = async (params: string) => {
        try {
            const seriesResponse = await movieDBApi(`/tv/${params}`);
            setSeries(seriesResponse?.data.results.slice(0, 4));
        } catch (error) {
            setSeries([]);
        }
    }

    const getPelicula = async (params: string) => {
        try {
            const peliculaResponse = await movieDBApi(`/movie/${params}`);
            setPelicula(peliculaResponse?.data);
        } catch (error) {
            setPelicula(INITIAL_STATE_MOVIE);
        }
    }

    const getSerie = async (params: string) => {
        try {
            const serieResponse = await movieDBApi(`/tv/${params}`);
            setSerie(serieResponse?.data);
        } catch (error) {
            setSerie(INITIAL_STATE_SERIE);
        }
    }

    const getSeasonDetail = async ( params: string ) => {
        try {
            const episodesResponse = await movieDBApi(`/tv/${params}`);
            setSeason(episodesResponse?.data);
        } catch (error) {
            setSeason(INITIAL_STATE_SEASON);
        }
    }

    const reset = async () => {
        setPeliculas([]);
        setSeries([]);
        setPelicula(INITIAL_STATE_MOVIE);
        setSerie(INITIAL_STATE_SERIE);
        setSeason(INITIAL_STATE_SEASON);
    }

    return (
        <MovieDBContext.Provider value={{
            peliculas,
            series,
            pelicula,
            serie,
            season,
            getPeliculas,
            getSeries,
            getPelicula,
            getSerie,
            getSeasonDetail,
            reset
        }}>
            {children}
        </MovieDBContext.Provider>
    )
}