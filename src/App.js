import './App.css';
import { useState } from 'react';
import { Col, Row } from 'antd';
import flow from './img/Flow.png';
import loup from './img/Loup.png';
import jour from './img/Ciel-bleu.jpg';
import nuit from './img/Ciel-nuit.jpg';
import { Link } from 'react-router-dom';

export default function App() {

  // initialisation de ma state isDark a false (booleen)
  const [isDark, setIsDark] = useState(false);

  // fonction appelé lors du clic sur le bouton
  // met à jour la state à chaque clic, en inversant le booleen
  const changeMode = () => {
    setIsDark(current => !current);
  };

  return (
    <div className='accueil' style={{ backgroundImage: isDark ? `url(${nuit})` : `url(${jour})` }}>
      <div className='contenuAccueil'>
        <div>
          {isDark ?
            <img src={loup} alt="cercle d'eau en mouvement" />
            :
            <img className='imgLight' src={flow} alt="image d'un loup hurlant à la lune" />
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
        {isDark ?
          <Link to={"/projets"}>
            <button className={`bouton ${isDark ? "boutonDark" : "boutonLight"}`} onClick={changeMode}>
              {isDark ? <p>Light Mode ?</p> : <p>Dark Mode</p>}
            </button>
          </Link>
          :
          <button className={`bouton ${isDark ? "boutonDark" : "boutonLight"}`} onClick={changeMode}>
            {isDark ? <p>Light Mode ?</p> : <p>Dark Mode</p>}
          </button>
        }
      </div>
    </div>
  )
}