import { Link } from "react-router-dom"

interface ItemPopularProps {
    id: number,
    title: string,
    srcImage: string | null,
    isSerie?: boolean
}

export const ItemPopular = ({ id, title, srcImage, isSerie = false }: ItemPopularProps) => {
    return(
        <>
            {isSerie ? (
                <Link to={`/serie/${id}/season/1`} className="relative elemento__popular">
                    <img className="h-full" src={`https://image.tmdb.org/t/p/w500/${srcImage}`} />
                    <span className="titulo__pelicula">{title}</span>
                </Link>
            ) : (
                <Link to={`/movie/${id}`} className="relative elemento__popular">
                    <img className="h-full" src={`https://image.tmdb.org/t/p/w500/${srcImage}`} />
                    <span className="titulo__pelicula">{title}</span>
                </Link>
            )}
        </>
    )
}