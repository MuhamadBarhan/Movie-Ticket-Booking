import React from 'react'
import '../Styles/MovieCard.css'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ title, movies }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="movie-container">
                <span className='container-title'>{title}</span>
                <div className="movie-card-container">
                    {movies.map((movie, index) => (
                        <div className="movie-card" onClick={()=>navigate(`/${movie.title}/${movie.id}`)}>
                            <img src={movie.link} alt="m" className='movie-card-image' />
                            <p className='movie-card-title'>{movie.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieCard