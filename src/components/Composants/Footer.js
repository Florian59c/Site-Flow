import React from 'react';
import { Col, Row } from 'antd';
import AN from '../../img/Drapeau-Anglais.png';
import JP from '../../img/Drapeau-Japonais.png';
import CV from '../../fichiers/CV - Cagnon Florian.pdf';

const Footer = () => {

    return (
        <div className='footer'>
            <Row justify='space-between' align="middle">
                <Col>
                    <Row>
                        <Col span={24}>
                            <a href={CV} target="_blank" rel="noreferrer noopener"><p>CV</p></a>
                        </Col>
                        <Col span={24}>
                            <a href="https://www.linkedin.com/in/florian-cagnon-dev-web-fullstack/" target="_blank" rel="noreferrer noopener"><p>LinkedIn</p></a>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <p className='copyright'>Ce site a été créé en intégralité par Cagnon Florian</p>
                </Col>
                <Col>
                    <a href="https://translate.google.fr/?hl=fr&sl=fr&tl=en&text=Vous%20pensiez%20que%20%C3%A7a%20changerait%20la%20langue%20%3F!%20Dommage...&op=translate" target="_blank" rel="noreferrer noopener"><img src={AN} alt="drapeau anglais pour changer la langue en anglais" /></a>
                    <a href="https://translate.google.fr/?hl=fr&sl=fr&tl=ja&text=Vous%20pensiez%20que%20%C3%A7a%20changerait%20la%20langue%20%3F!%20Dommage...&op=translate" target="_blank" rel="noreferrer noopener"><img src={JP} alt="drapeau japonais pour changer la langue en japonais" /></a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer