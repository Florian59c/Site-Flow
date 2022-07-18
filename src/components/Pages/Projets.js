import React from 'react';
import Header from '../Composants/Header';
import Footer from '../Composants/Footer';
import BoutonProjets from '../Composants/BoutonProjets';
import ListeProjets from '../Classes/ListeProjets';

const Projets = () => {

  // fonction permettant d'afficher mes BoutonProjets dans mes composants en envoyant les informations nécessaires pour le link
  const boutonProjets = (proj) => {
    return (
      <BoutonProjets key={proj.id}
        titre={proj.titre}
        url={proj.url}
      />
    )
  };

  // fait appel à mes 2 premiers projets en créant 2 boutons
  // sera utile pour les dissocier pour ma mise en page
  const listPresentations = ListeProjets.slice(0, 2).map(projet => {
    return (
      boutonProjets(projet)
    )
  })

  // fait appel aux projets à partir du 3ème et créé autant de bouton q'il y a de projet
  // sera utile pour les dissocier des 2 premiers - pour ma mise en page
  const listProjets = ListeProjets.slice(2).map(projet => {
    return (
      boutonProjets(projet)
    )
  })

  return (
    <div>
      <Header />
      <div className='projetsContainer'>
        <div className='projets1er'>
          {listPresentations}
        </div>
        <div className='projets2nd'>
          {listProjets}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projets