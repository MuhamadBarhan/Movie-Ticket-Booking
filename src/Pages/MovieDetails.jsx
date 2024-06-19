import React from 'react'
import { useParams } from 'react-router-dom'
import { movies_recommended , movies_fun } from '../assets/Movies';
import YouTubePlayer from './Components/YouTubePlayer';

const MovieDetails = () => {

  const params = useParams();
  const mergedMovies = [...movies_recommended, ...movies_fun];
  const movie = mergedMovies.find((element)=> element.id===parseInt(params.id));

  return (
    <div>
      <p style={{fontSize:'20px'}}>{movie.title}</p>
      <YouTubePlayer videoId={movie.videoId} />
    </div>
  )
}

export default MovieDetails