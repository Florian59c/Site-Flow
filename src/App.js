import './App.css';
import { useState } from 'react';
import { Button, Col, Row } from 'antd';
import flow from './img/Flow.png'
import loup from './img/Loup.jpg'

export default function App() {

  // initialisation de ma state isDark a false (booleen)
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(current => !current);
  };

  // const changeMode = event => {
  //   event.currentTarget.style.backgroundColor = 'salmon';
  //   event.currentTarget.style.color = 'white';

  //   event.currentTarget.classList.add('my-class-1', 'my-class-2');
  // };

  return (
    <div className='accueil'>
      <div>
        {/* <img
          style={{ background: isDark ? '' : 'radial-gradient(ellipse farthest-corner,rgb(176,218,240), rgb(0,0,0, 0) 30% )', }}
          src={isDark ? loup : flow} alt="cercle d'eau en mouvement"
        /> */}

        {isDark ?
          <img style={{ background: '' }} src={loup} alt="cercle d'eau en mouvement" />
          :
          <img style={{ background: 'radial-gradient(ellipse farthest-corner,rgb(176,218,240), rgb(0,0,0, 0) 30% )' }} src={flow} alt="image d'un loup hurlant à la lune" />
        }


      </div>
      <div>
        <Row justify="center" style={{ flexDirection: isDark ? 'row-reverse' : '', }} >
          <Col>
            <h1 style={{ color: isDark ? 'white' : 'black', }}>F</h1>
          </Col>
          <Col>
            <h1 style={{ color: isDark ? 'white' : 'black', }}>L</h1>
          </Col>
          <Col>
            <h1 style={{ color: isDark ? 'white' : 'black', }}>O</h1>
          </Col>
          <Col>
            <h1 style={{ color: isDark ? 'white' : 'black', }}>W</h1>
          </Col>
        </Row>
      </div>
      <div>
        <h2 style={{ color: isDark ? 'white' : 'black', }}>
          {isDark ? 'appeared' : 'vous présente ses projets'}
        </h2>
      </div>
      <Button onClick={changeMode} >Dark Mode</Button>
    </div>
  )
}
