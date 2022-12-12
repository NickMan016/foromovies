import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GliderComponent from "react-glider"
import { MoviePopular } from "../../interfaces/MovieDBInterfaces";
import { ItemCarousel } from "./components/ItemsCarousel";

interface CarouselProps {
    data: MoviePopular[]
}

export const Carousel = ({ data }: CarouselProps) => {
    return(
        <div className="max-w-[1100px] w-[90%] m-auto my-10">
            <div className="relative">
                <button className="absolute top-0 w-[5%] h-full bg-none text-center cursor-pointer left-0 z-30 text-2xl transition-all duration-300 hover:bg-black/60 carousel__anterior">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <GliderComponent
                    className="w-[90%] m-auto overflow-hidden"
                    slidesToScroll={2}
                    slidesToShow={2}
                    hasArrows
                    hasDots
                    arrows={{
                        prev: '.carousel__anterior',
                        next: '.carousel__siguiente'
                    }}
                    dots=".carousel__nav"
                >
                    {data?.map((value, index) => {
                        return (
                            <ItemCarousel key={index} id={value.id} srcImage={value.backdrop_path} />
                        )
                    })}
                </GliderComponent>

                <button className="absolute top-0 w-[5%] h-full bg-none text-center cursor-pointer right-0 z-30 text-2xl transition-all duration-300 hover:bg-black/60 carousel__siguiente">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="carousel__nav"></div>
        </div>
    )
}