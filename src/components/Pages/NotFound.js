import React from 'react';
import { Link } from 'react-router-dom';
import MenInBlack from '../../img/Men-in-black.png';

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <h1>404 Page non trouvée</h1>
      <Link to={"/"}>
        <img src={MenInBlack} alt="Homme en costume cravate sur fond blanc" />
      </Link>
      <h1>Circulez, y a rien à voir ici !</h1>
    </div>
  )
}

export default NotFound