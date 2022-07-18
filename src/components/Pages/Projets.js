import React from 'react';
import Header from '../Composants/Header'
import Footer from '../Composants/Footer'
import BoutonProjets from '../Composants/BoutonProjets'
import ListeProjets from '../Classes/ListeProjets';

const Projets = () => {

  const listProjets = ListeProjets.map(projet => {
    return (
      <BoutonProjets key={projet.id}
        titre={projet.titre}
      />
    )
  })

  return (
    <div>
      <Header />
      <div className='projetsContainer'>
        {listProjets}
      </div>
      <Footer />
    </div>
  )
}

export default Projets