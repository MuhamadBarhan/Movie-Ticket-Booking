import React from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { movies_recommended, movies_fun } from '../assets/Movies';
import YouTubePlayer from './Components/YouTubePlayer';
import './Styles/MovieDetails.css'

const MovieDetails = () => {

  const params = useParams();
  const mergedMovies = [...movies_recommended, ...movies_fun];
  const movie = mergedMovies.find((element) => element.id === parseInt(params.id));

  return (
    <div className='movie-details'>
      <YouTubePlayer videoId={movie.videoId} />
      <p className='movie-heading'>{movie.title}</p>
      <p className='movie-rating'><FontAwesomeIcon icon={faStar} /> 8.5/10</p>
      <span className='movie-type'>2D</span><span className='movie-type'>English</span>
      <p className='movie-about'>{movie.description}</p>
      <p className='movie-heading'>Cast</p>
      <div className="cast-container">
      {movie.cast.map((movieCast, index) => (
        <div className="cast-item" key={index}>
          <img src={movieCast.link} alt={movieCast.name} className='cast-image'/>
          <p className='cast-name'>{movieCast.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default MovieDetails