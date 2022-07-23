import React from 'react';
import { useParams } from 'react-router-dom';
import ListeProjets from '../Classes/ListeProjets';

const DetailsProjets = () => {

  const { url } = useParams();

  const projetTrouver = ListeProjets.find(projet => {
    return projet.url === url
  })

  return (
    <div>
      <h1>{projetTrouver.id}</h1>
      <h1>{projetTrouver.titre}</h1>
    </div>
  )
}

export default DetailsProjets