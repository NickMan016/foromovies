import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GliderComponent from "react-glider"
import { crew_single, cast } from "../../../../interfaces/MovieDBInterfaces"

interface ChapterProps {
    type: 'cast' | 'guest'
    actors?: cast[]
    index: number
}

export const CarouselActors = ({ actors, index, type }: ChapterProps) => {
    return (
        <div className="relative mt-4">
            {
                type === "guest" ? (
                    <div className="font-bold text-xl">Artistas Invitados</div>
                ) : (
                    <></>
                )
            }
            <button className={`absolute top-0 w-[5%] h-full bg-none text-center cursor-pointer left-0 z-30 text-2xl carousel__anterior${index}`}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <GliderComponent
                className="w-[90%] m-auto overflow-hidden"
                slidesToScroll={5}
                slidesToShow={5}
                hasArrows
                arrows={{
                    prev: `.carousel__anterior${index}`,
                    next: `.carousel__siguiente${index}`
                }}
            >
                <>
                    {
                        actors?.map((value, index) => (
                            <div key={index} className="block text-center">
                                <img src={`https://image.tmdb.org/t/p/w500/${value.profile_path}`} className="h-[100px] block m-auto my-2" />
                                <div>{value.name}</div>
                                <div className="text-xs px-2">{value.character}</div>
                            </div>
                        ))
                    }
                </>
            </GliderComponent>
            <button className={`absolute top-0 w-[5%] h-full bg-none text-center cursor-pointer right-0 z-30 text-2xl carousel__siguiente${index}`}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}