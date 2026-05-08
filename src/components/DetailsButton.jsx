import React from 'react';
import { Link } from 'react-router-dom';

const DetailsButton = ( {id} ) => {
  return (
    <Link to={`/characters/${id}`}> Visa karaktär </Link>
  )
}

export default DetailsButton