import './App.css';
import { useState } from 'react';
import { Col, Row } from 'antd';
import flow from './img/Flow.png';
import loup from './img/Loup.png';
import jour from './img/Ciel-bleu.jpg';
import nuit from './img/Ciel-nuit.jpg';

export default function App() {

  // initialisation de ma state isDark a false (booleen)
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(current => !current);
  };

  const changeHover = (e) => {
    // {isDark ? e.target.style.background = 'red' : e.target.style.background = 'green'}
  };

  const returnHover = (e) => {
    // {isDark ? e.target.style.background = 'blue' : e.target.style.background = 'white'}
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
            {isDark ? 'was appeared !' : 'vous présente ses projets'}
          </h2>
        </div>
        <button className={`bouton ${isDark ? "boutonDark" : "boutonLight"}`} onClick={changeMode} onMouseEnter={changeHover} onMouseLeave={returnHover}
        >
          {isDark ? <p>Light Mode ?</p> : <p>Dark Mode</p>}
        </button>
      </div>
    </div>
  )
}


