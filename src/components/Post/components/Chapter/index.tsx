import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { cast } from "../../../../interfaces/MovieDBInterfaces";
import { CarouselActors } from "../CarouselActors";

interface ChapterProps {
    title: string,
    bgImage: string | null,
    synopsis: string | null,
    guest_actors: cast[],
    index: number
}

export const Chapter = ({ title, bgImage, index, synopsis, guest_actors }: ChapterProps) => {
    const [isActiveChapter, setIsActiveChapter] = useState(false);
    const handleChapterClick = () => {
        setIsActiveChapter(!isActiveChapter);
    }

    return (
        <div className="transition-all duration-500 mb-1">
            <div className="bg-[#424242] p-5 cursor-pointer" onClick={handleChapterClick}>{`Capitulo ${index} - ${title}`}
                <i className="float-right text-lg transition-all duration-500 ease-in-out"><FontAwesomeIcon icon={faChevronDown} /></i>
            </div>
            <div className={`relative transition-[height] duration-700 ease-in-out ${isActiveChapter ? "h-auto overflow-y-scroll" : "overflow-hidden h-0"}`}>
                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://image.tmdb.org/t/p/w500/${bgImage}")` }} className="absolute w-full h-full bg-no-repeat bg-cover blur-sm -z-10"></div>
                <div className="p-4">
                    <div>{synopsis}</div>
                    {
                        guest_actors.length !== 0 ? (
                            <CarouselActors actors={guest_actors} index={index} type="guest" />
                        ) : undefined
                    }
                </div>
            </div>
        </div>
    )
}