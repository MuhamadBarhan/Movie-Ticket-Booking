import React from 'react'
import { images, movies_recommended , movies_fun } from '../assets/Movies';
import Carousel from './Components/Carousel';
import MovieCard from './Components/MovieCard';

const Home = () => {

 
  return (
    <div>
      <Carousel images={images} />
      <MovieCard title='Recommended movies' movies={movies_recommended} />
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717081745174_playcradapp.jpg" alt="ad" style={{ width: '100%' }} />
      <MovieCard title='Explore Fun Activities' movies={movies_fun} />
    </div>
  )
}

export default Home