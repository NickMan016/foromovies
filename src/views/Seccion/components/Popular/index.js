import React from 'react';
import ItemPopular from '../ItemPopular';
import './Popular.css';

export default function Popular({ data, isSerie }) {
    return (
        <div className="contenedor__popular">
            {data?.map((value, index) => {
                return (
                    <React.Fragment key={index}>
                        {isSerie ? (
                        <ItemPopular id={value.id} title={value.name} srcImage={value.poster_path} isSerie={true} />
                        ) : (
                        <ItemPopular id={value.id} title={value.title} srcImage={value.poster_path} />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}