import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import flow from './img/Flow.png';
import loup from './img/Loup.png';
import jour from './img/Ciel-bleu.jpg';
import nuit from './img/Ciel-nuit.jpg';

export default function App() {

  // initialisation de ma state isDark a false (booleen)
  const [isDark, setIsDark] = useState(false);

  // fonction appelé lors du clic sur le bouton
  // met à jour la state à chaque clic, en inversant le booleen
  const changeMode = () => {
    setIsDark(current => !current);
  };

  // fonction qui retourne le bouton cliquable
  // centralisé ici, car il est répété 2 fois dans la dernière ternaire (1 avec un Link et l'autre sans Link)
  const boutonSwitch = () => {
    return (
      <button className={`bouton ${isDark ? "boutonDark" : "boutonLight"}`} onClick={changeMode}>
        {isDark ? <p>Light Mode ?</p> : <p>Dark Mode</p>}
      </button>
    )
  };

  return (
    <div className='accueil' style={{ backgroundImage: isDark ? `url(${nuit})` : `url(${jour})` }}>
      <div className='contenuAccueil'>
        <div>
          {isDark ?
            <img src={loup} alt="Cercle d'eau en mouvement" />
            :
            <img className='imgLight' src={flow} alt="Loup hurlant à la lune" />
          }
        </div>
        <div>
          <Row justify="center" style={{ flexDirection: isDark ? 'row-reverse' : '', }} >
            <Col>
              <h1 className={`${isDark ? "titreDark" : "titreLight"}`}>F</h1>
            </Col>
            <Col>
              <h1 className={`${isDark ? "titreDark" : "titreLight"}`}>L</h1>
            </Col>
            <Col>
              <h1 className={`${isDark ? "titreDark" : "titreLight"}`}>O</h1>
            </Col>
            <Col>
              <h1 className={`${isDark ? "titreDark" : "titreLight"}`}>W</h1>
            </Col>
          </Row>
        </div>
        <div>
          <h2 className={`${isDark ? "titreDark" : "titreLight"}`}>
            {isDark ? 'appeared !' : 'vous présente ses projets'}
          </h2>
        </div>
        {isDark ? <Link to={"/projets"}> {boutonSwitch()} </Link> : boutonSwitch()}
      </div>
    </div>
  )
}