import React, { useState } from 'react'
import YouTube from 'react-youtube';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { movies_recommended, movies_fun } from '../assets/Movies';
import './Styles/MovieDetails.css'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const MovieDetails = () => {

  const params = useParams();
  const mergedMovies = [...movies_recommended, ...movies_fun];
  const movie = mergedMovies.find((element) => element.id === parseInt(params.id));
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    setLoading(false);
  };





  return (
    <>
      {loading && (
        <>
          <span className='video-loader'><FontAwesomeIcon icon={faYoutube}/></span><br></br>
        <div className="spinner-container">
          <ClipLoader color="#df1827" loading={loading} size={20} />
        </div>
        </>
      )}
      <div className={`movie-details ${loading ? 'hidden' : ''}`}>
        <div className="video-container">
          <YouTube videoId={movie.videoId} opts={opts} onReady={onReady} />
        </div>
        <p className='movie-heading'>{movie.title}</p>
        <p className='movie-rating'><FontAwesomeIcon icon={faStar} /> 8.5/10</p>
        <span className='movie-type'>2D</span><span className='movie-type'>English</span>
        <p className='movie-about'>{movie.description}</p>
        <p className='movie-heading'>Cast</p>
        <div className="cast-container">
          {movie.cast.map((movieCast, index) => (
            <div className="cast-item" key={index}>
              <img src={movieCast.link} alt={movieCast.name} className='cast-image' />
              <p className='cast-name'>{movieCast.name}</p>
            </div>
          ))}
        </div>
        <div className='book-ticket'><button className='book-btn' onClick={()=>navigate('/buytickets', {state:{movieData:movie}})}>Book Tickets</button></div> 
      </div>
    </>
  )
}

export default MovieDetails

// onClick={()=>navigate('/buytickets', {state:{movieData:movie}})}