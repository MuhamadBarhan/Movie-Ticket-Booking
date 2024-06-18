import React from 'react'
import '../Styles/MovieCard.css'

const MovieCard = ({ title, images }) => {

    return (
        <>
            <div className="movie-container">
                <span className='container-title'>{title}</span>
                <div className="movie-card-container">
                    {images.map((image, index) => (
                        <div className="movie-card">
                            <img src={image.link} alt="m" className='movie-card-image' />
                            <p className='movie-card-title'>{image.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieCard