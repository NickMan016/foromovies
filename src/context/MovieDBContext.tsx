import { createContext } from "react";
import { Credits, MovieDetail, MoviePopular, SeasonDetail, SerieDetail, SeriePopular } from "../interfaces/MovieDBInterfaces";

export type MovieDBContextProps = {
    peliculas: MoviePopular[],
    series: SeriePopular[],
    pelicula: MovieDetail,
    serie: SerieDetail,
    season: SeasonDetail,
    credits: Credits,
    busqueda: any[],
    getPeliculas: (params: string) => Promise<void>,
    getSeries: (params: string) => Promise<void>,
    getPelicula: (params: string) => Promise<void>,
    getSerie: (params: string) => Promise<void>,
    getSeasonDetail: (params: string) => Promise<void>,
    getCredits: (params: string) => Promise<void>,
    find: (params: string) => Promise<void>,
    reset: () => void
}

export const MovieDBContext = createContext<MovieDBContextProps>({} as MovieDBContextProps);