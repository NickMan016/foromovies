import { Link } from "react-router-dom"

interface ItemCarouselProps {
    id: number,
    srcImage: string | null
}

export const ItemCarousel = ({ id, srcImage }: ItemCarouselProps) => {
    return(
        <div className="bg-[#ff8000]">
            <Link to={`/movie/${id}`} className="block w-full m-auto">
                <img src={`https://image.tmdb.org/t/p/w500/${srcImage}`} className="block w-full" />
            </Link>
        </div>
    )
}