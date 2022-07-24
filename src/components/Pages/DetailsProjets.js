import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Composants/Header';
import Footer from '../Composants/Footer';
import ListeProjets from '../Classes/ListeProjets';
// projetTrouver.nomImage
const DetailsProjets = () => {

  // recupere dans mes params de mes props la valeur de l'url de la page
  const { url } = useParams();

  // fonction qui compare l'url recuperé juste avant et le compare avec les url de chaque projets dans ma ListeProjets - une fois trouvé, la fonction ne garde qu'un tableau contenant les information d'un seul projet (celui qui a le bon url)
  const projetTrouver = ListeProjets.find(projet => {
    return projet.url === url
  })

  return (
    <div>
      <Header />
      <div className='projetsContainer'>
        <div>
          <h1>{projetTrouver.nom}</h1>
        </div>
        <div>
          <div>
            <img src={projetTrouver.lienImage} alt="Capture décran du projet" />
            <p>{projetTrouver.listLangages}</p>
          </div>
          <div>
            <h2>Présentation</h2>
            <p>{projetTrouver.presentation}</p>
          </div>
        </div>
        <div>
          <h2>plus de détails</h2>
          <p>{projetTrouver.details}</p>
        </div>
        <div>
          <h3>Pour avoir encore plus d'informations, vous pouvez lire la documentation complète du projet ou le tester grâce aux boutons suivants !</h3>
        </div>
        <div>
          <div className='boutonProjets'>
            <button>
              <h1>
                Documentation sur {projetTrouver.nom}
              </h1>
            </button>
          </div>
          <div className='boutonProjets'>
            <button>
              <h1>
                Découvrir {projetTrouver.nom}
              </h1>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailsProjets