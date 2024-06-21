import React from 'react'
import { useLocation } from 'react-router-dom';

const BuyTickets = () => {

    const location = useLocation();
    const { movieData } = location.state || {};

  return (
    <div>{movieData.title}</div>
  )
}

export default BuyTickets