import React from "react";
import { Link } from "react-router-dom";

export default function ItemPopular({ id, title, srcImage, isSerie }) {
    return (
        <React.Fragment>
            {isSerie ? (
                <Link to={`/serie/${id}/season/1`} className="elemento__popular">
                    <img src={`https://image.tmdb.org/t/p/w500/${srcImage}`} />
                    <span className="titulo__pelicula">{title}</span>
                </Link>
            ) : (
                <Link to={`/movie/${id}`} className="elemento__popular">
                    <img src={`https://image.tmdb.org/t/p/w500/${srcImage}`} />
                    <span className="titulo__pelicula">{title}</span>
                </Link>
            )}
        </React.Fragment>
    );
}