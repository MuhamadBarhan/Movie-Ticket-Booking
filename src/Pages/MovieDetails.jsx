import React from 'react'
import { useParams } from 'react-router-dom'
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
      <p className='movie-about'>{movie.description}</p>
      <p className='movie-heading'>Cast</p>
      <div className="cast-container">
      {movie.cast.map((movieCast, index) => (
        <div className="cast-item" key={index}>
          <img src={movieCast.link} alt={movieCast.name} className='cast-image'/>
          <p>{movieCast.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default MovieDetails