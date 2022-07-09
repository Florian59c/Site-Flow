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
            <img style={{ background: '' }} src={loup} alt="cercle d'eau en mouvement" />
            :
            <img style={{ background: 'radial-gradient(ellipse farthest-corner,rgb(176,218,240), rgb(0,0,0, 0) 30% )' }} src={flow} alt="image d'un loup hurlant à la lune" />
          }
        </div>
        <div>
          <Row justify="center" style={{ flexDirection: isDark ? 'row-reverse' : '', }} >
            <Col>
              <h1 style={{ color: isDark ? 'white' : '#22211F', textShadow: isDark ? '-0.5rem 0.5rem 1rem #E0E0E0' : '-0.5rem 0.5rem 1rem #22211F', }}>F</h1>
            </Col>
            <Col>
              <h1 style={{ color: isDark ? 'white' : '#22211F', textShadow: isDark ? '-0.5rem 0.5rem 1rem #E0E0E0' : '-0.5rem 0.5rem 1rem #22211F', }}>L</h1>
            </Col>
            <Col>
              <h1 style={{ color: isDark ? 'white' : '#22211F', textShadow: isDark ? '-0.5rem 0.5rem 1rem #E0E0E0' : '-0.5rem 0.5rem 1rem #22211F', }}>O</h1>
            </Col>
            <Col>
              <h1 style={{ color: isDark ? 'white' : '#22211F', textShadow: isDark ? '-0.5rem 0.5rem 1rem #E0E0E0' : '-0.5rem 0.5rem 1rem #22211F', }}>W</h1>
            </Col>
          </Row>
        </div>
        <div>
          <h2 style={{ color: isDark ? 'white' : '#22211F', textShadow: isDark ? '-0.5rem 0.5rem 1rem #E0E0E0' : '-0.5rem 0.5rem 1rem #22211F', }}>
            {isDark ? 'was appeared !' : 'vous présente ses projets'}
          </h2>
        </div>
        <button className='bouton' onClick={changeMode} onMouseEnter={changeHover} onMouseLeave={returnHover}
          style={{
            color: isDark ? 'white' : 'black',
            border: isDark ? '0.2rem solid rgb(208, 208, 211)' : '0.2rem solid rgb(144, 147, 163)',
            backgroundColor: isDark ? '#bababd' : '#444751',
            boxShadow: isDark ? '0 1rem 1rem 0 rgb(255, 255, 255, 0.4)' : '0 1rem 1rem 0 rgb(0, 0, 0, 0.3)',
            background: isDark ? 'linear-gradient(rgb(209, 209, 209), rgb(70, 70, 70))' : 'linear-gradient(rgb(99, 99, 110), rgb(59, 61, 70))'
          }}
        >
          {isDark ? <p>Light Mode ?</p> : <p>Dark Mode</p>}
        </button>
      </div>
    </div>
  )
}


