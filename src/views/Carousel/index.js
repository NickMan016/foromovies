import { useEffect, useState } from 'react';
import axios from 'axios';
import Glider from 'react-glider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ItemCarousel from './components/ItemCarousel';

import './glider.min.css';
import './Carousel.css';

export default function Carousel({ data }) {

    useEffect(() => {
    }, []);
    return (
        <div className="carousel">
            <div className="carousel__contenedor">
                <button className="carousel__anterior">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <Glider
                    className='carousel__lista'
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
                </Glider>

                <button className="carousel__siguiente">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="carousel__nav"></div>
        </div>
    );
}