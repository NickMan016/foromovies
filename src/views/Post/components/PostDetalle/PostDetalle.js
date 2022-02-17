import React from "react";

export default function PostDetalle({bgImage, poster, title, originalTitle, genres, synopsis}) {
    return (
        <div className="post">
            <div className="contenedor__post">
                <div className="bg__post" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(26, 26, 26, 0.9)), url("https://image.tmdb.org/t/p/w500/${bgImage}")`}}></div>
                <div className="principal__post">
                    <div className="poster__post">
                        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
                    </div>
                    <div className="info__post">
                        <p className="titulo__post">{title}</p>
                        <p className="original__post">Titulo Original: {originalTitle}</p>
                        <p className="categorias__post">
                            {genres?.map((value, index) => {
                                return (
                                    <span key={index}>{
                                        (index + 1) === genres.length ? `${value.name}` : `${value.name}, `
                                    }</span>
                                );
                            })}
                        </p>
                        <p className="descripcion__post">{synopsis}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}