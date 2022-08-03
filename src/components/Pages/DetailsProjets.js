import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Composants/Header';
import Footer from '../Composants/Footer';
import ListeProjets from '../Classes/ListeProjets';
import { Col, Row } from 'antd';
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
      {/* la classe "projetsContainer" applique les meme marges et les meme style sur les bouton que sur la page Projets */}
      <div className='projetsContainer '>
        <div className='detailsProjetsContainer'>
          <div className='titreProjet'>
            <h1>{projetTrouver.nom}</h1>
          </div>
          <div>
            <Row className='description' justify='center' gutter={40}>
              <Col lg={12}>
                <img src={projetTrouver.lienImage} alt="Capture décran du projet" />
                <p className='listTechno'>{projetTrouver.listLangages}</p>
              </Col>
              <Col lg={12}>
                <h2>Présentation</h2>
                <p>{projetTrouver.presentation}</p>
              </Col>
            </Row>
          </div>
          <div>
            <h2>Plus de détails</h2>
            <p>{projetTrouver.details}</p>
          </div>
          <div>
            <h3>Pour avoir encore plus d'informations, vous pouvez lire la documentation complète du projet ou le tester grâce aux boutons suivants !</h3>
          </div>
        </div>
        <div className='boutonRedirection'>
          <Row>
            <Col xs={24} lg={12}>
              <div className='boutonProjets'>
                <button>
                  <h1>
                    Documentation sur {projetTrouver.nom}
                  </h1>
                </button>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='boutonProjets'>
                <a href="https://www.google.fr/">
                  <button>
                    <h1>
                      Découvrir {projetTrouver.nom}
                    </h1>
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailsProjets