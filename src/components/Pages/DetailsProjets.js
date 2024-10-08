import React from 'react';
import { Link, useParams } from 'react-router-dom';
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

  // verifie si il y a du contenu dans la section details de mon enregistrement
  // si c'est le cas, il affiche le paragraphe, sinon il n'affiche rien (pour ne pas mettre le titre sans son contenu)
  const existDetails = () => {
    if (projetTrouver.details !== "") {
      return (
        <div>
          <h2>Plus de détails</h2>
          <p>{projetTrouver.details}</p>
        </div>
      )
    }
  };

  return (
    <div>
      {/* le ternaire verifie que l'on a bien trouvé le contenu de l'enregistrement via l'url (impossible à moins de changer directement l'url)
      ça permet d'éviter une page noire si un utilisateur decide de modifier l'url et lui affiche un message d'erreur */}
      {projetTrouver !== undefined ?
        <div>
          <Header />
          {/* la classe "projetsContainer" applique les meme marges et les meme style sur les bouton que sur la page Projets */}
          <div className='projetsContainer'>
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
                    <div>
                      <h2>Présentation</h2>
                      <p>{projetTrouver.presentation}</p>
                    </div>
                  </Col>
                </Row>
              </div>
              {existDetails()}
            </div>
            <div className='video-projet'>
              {projetTrouver.video.length !== 0 ?
                <div>
                  <h3>Vidéo{projetTrouver.video.length > 1 ? "s" : ""} de Démonstration :</h3>
                  <Row align='middle' justify="center" gutter={24}>
                    {projetTrouver.video.map(v => {
                      return (
                        <Col xs={24} lg={8}>
                          <video width="100%" controls>
                            <source src={v.url} type="video/mp4" />
                          </video>
                          <p className='video-title'>{v.name}</p>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
                : ""}
            </div>
            <div>
              <h3>Pour avoir encore plus d'informations, Vous pouvez explorer les liens suivants :</h3>
            </div>
            <div className='boutonRedirection'>
              <Row justify="center" className='boutonLienSite'>
                {projetTrouver.lienSite !== "" ? (
                  <Col xs={24} lg={18}>
                    <div className='boutonProjets'>
                      <a href={projetTrouver.lienSite} target="_blank" rel="noreferrer noopener">
                        <button>
                          <h1>
                            Parcourir {projetTrouver.nom}
                          </h1>
                        </button>
                      </a>
                    </div>
                  </Col>
                ) : ""}
              </Row>
              <Row align='middle' justify="center">
                {projetTrouver.lienGitHub !== "" ? (
                  <Col xs={24} lg={12}>
                    <div className='boutonProjets'>
                      <a href={projetTrouver.lienGitHub} target="_blank" rel="noreferrer noopener">
                        <button>
                          <h1>
                            Le lien GitHub
                          </h1>
                        </button>
                      </a>
                    </div>
                  </Col>
                ) : ""}
                {projetTrouver.lienFigma !== "" ? (
                  <Col xs={24} lg={12}>
                    <div className='boutonProjets'>
                      <a href={projetTrouver.lienFigma} target="_blank" rel="noreferrer noopener">
                        <button>
                          <h1>
                            Les maquettes du projet
                          </h1>
                        </button>
                      </a>
                    </div>
                  </Col>
                ) : ""}
                {projetTrouver.lienDocumentation !== "" ? (
                  <Col xs={24} lg={12}>
                    <div className='boutonProjets'>
                      <a href={projetTrouver.lienDocumentation} target="_blank" rel="noreferrer noopener">
                        <button>
                          <h1>
                            La documentation
                          </h1>
                        </button>
                      </a>
                    </div>
                  </Col>
                ) : ""}
              </Row>
            </div>
          </div>
          <Footer />
        </div>
        :
        <div className='projetsContainer projetIntrouvable'>
          <h2>Le projet que vous souhaitez consulter n'existe pas !</h2>
          <div className='boutonProjets'>
            <Link to={"/projets"}>
              <button>
                <h1>Revenir sur la liste des projets</h1>
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailsProjets