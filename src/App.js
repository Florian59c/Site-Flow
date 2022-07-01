import './App.css';
import { Component } from 'react'; // permet d'utiliser "export default class app extends Component"
import { Button, Col, Row } from 'antd';

export default class app extends Component {

  render() {

    const changeMode = (e) => {
      e.target.classList.add("pageDark")
    };

    return (
      <div className='accueil'>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <Row justify="center">
            <Col>
              <h1>F</h1>
            </Col>
            <Col>
              <h1>L</h1>
            </Col>
            <Col>
              <h1>O</h1>
            </Col>
            <Col>
              <h1>W</h1>
            </Col>
          </Row>
        </div>
        <div>
          <h2>vous présente ses projets</h2>
        </div>
        <Button onClick={changeMode} >Dark Mode</Button>
      </div>
    )
  }
}