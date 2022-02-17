import { Link } from "react-router-dom";

export default function ItemCarousel({ id, srcImage }) {
    return (
        <div className="carousel__item">
            <Link to={`/movie/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${srcImage}`} />
            </Link>
        </div>
    );
}