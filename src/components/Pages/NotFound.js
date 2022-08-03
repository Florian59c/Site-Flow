import React from 'react';
import MenInBlack from '../../img/Men-in-black.png';

const NotFound = () => {
  return (
    <div>
      <h1>404 Page non trouvée</h1>
      <img src={MenInBlack} alt="Homme en costume cravate sur fond blanc" />
      <h1>Circulez, y a rien à voir ici !</h1>
    </div>
  )
}

export default NotFound