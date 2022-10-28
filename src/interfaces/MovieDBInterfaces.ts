

export interface MoviePopular {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}

export interface SeriePopular {
    poster_path: string | null,
    popularity: number,
    id: number,
    backdrop_path: string | null,
    vote_average: number,
    overview: string,
    first_air_date: string,
    origin_country: string[],
    genre_ids: string[],
    original_language: string,
    vote_count: number,
    name: string,
    original_name: string
}

export interface MovieDetail {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | Object,
    budget: number,
    genres: genre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: production_companie[],
    production_countries: production_countrie[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: spoken_language[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface SerieDetail {
    backdrop_path: string | null,
    created_by: created_by_single[],
    episode_run_time: number[],
    first_air_date: string,
    genres: genre[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: last_episode_to_air,
    name: string,
    next_episode_to_air: null,
    networks: network[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: production_companie[],
    production_countries: production_countrie[],
    seasons: season[],
    spoken_languages: spoken_language[],
    status: string,
    tagline: string,
    type: string
    vote_average: number,
    vote_count: number
}

export interface SeasonDetail {
    _id: string,
    air_date: string,
    episodes: episode[],
    name: string,
    overview: string,
    id: number,
    poster_path: string | null,
    season_number: number
}

export interface genre {
    id: number,
    name: string
}

export interface production_companie {
    id: number,
    logo_path: string | null,
    name: string,
    origin_country: string
}

export interface production_countrie {
    iso_3166_1: string,
    name: string
}

export interface spoken_language {
    iso_639_1: string,
    name: string
}

export interface created_by_single {
    id: number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string | null
}

export interface last_episode_to_air {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    season_number: number,
    still_path: string | null,
    vote_average: number,
    vote_count: number
}

export interface network {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string,
}

export interface season {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
}

export interface episode {
    air_date: string,
    episode_number: number,
    crew: crew_single[],
    guest_stars: guest_star[],
    id: number,
    name: string,
    overview: string,
    production_code: string,
    season_number: number,
    still_path: string,
    vote_average: number,
    vote_count: number
}

export interface crew_single {
    department: string,
    job: string,
    credit_id: string,
    adult: boolean | null,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null
}

export interface guest_star {
    credit_id: string,
    order: number,
    character: string,
    adult: boolean,
    gender: number | null,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null
}