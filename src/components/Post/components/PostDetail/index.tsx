import { genre, production_companie } from "../../../../interfaces/MovieDBInterfaces";

interface PostDetail {
    bgImage: string | null,
    poster: string | null,
    title: string,
    originalTitle: string,
    genres: genre[],
    synopsis: string | null
}

export const PostDetail = ({ bgImage, poster, title, originalTitle, genres, synopsis }: PostDetail) => {
    return (
        <div className="max-w-[1100px] w-[90%] m-auto">
            <div className="relative h-[500px] mb-[60px]">
                <div className="absolute w-full h-[300px] bg-no-repeat bg-cover blur-sm -z-10" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(26, 26, 26, 0.9)), url("https://image.tmdb.org/t/p/w500/${bgImage}")` }}></div>
                <div className="absolute top-1/4 left-[10%] w-4/5">
                    <div className="mr-10 float-left h-[400px]">
                        <img className="h-full" src={`https://image.tmdb.org/t/p/w500/${poster}`} />
                    </div>
                    <div className="block w-full mt-20">
                        <div className="text-[1.75rem] leading-normal font-bold">{title}</div>
                        <div className="original__post text-[1.2rem] leading-normal">Titulo Original: {originalTitle}</div>
                        <div className="categorias__post">
                            {
                                genres?.map((value, index) => {
                                    return (
                                        <span className="leading-normal" key={index}>{
                                            (index + 1) === genres.length ? `${value.name}` : `${value.name}, `
                                        }</span>
                                    );
                                })
                            }
                        </div>
                        <div className="mt-1 leading-normal h-48 overflow-auto">{synopsis}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}