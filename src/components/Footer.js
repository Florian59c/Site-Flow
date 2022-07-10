import React from 'react';
import { Col, Row } from 'antd';
import AN from '../img/Drapeau-Anglais.png';
import JP from '../img/Drapeau-Japonais.png';

const Footer = () => {
    return (
        <div className='footer'>

            <Row>
                <Col>
                    <Row>
                        <Col span={24}>
                            <p>CV</p>
                        </Col>
                        <Col span={24}>
                            <p>LinkedIn</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <p>Ce site a été créé en intégralité par Cagnon Florian</p>
                </Col>
                <Col>
                    <img src={AN} alt="drapeau anglais pour changer la langue en anglais" />
                    <img src={JP} alt="drapeau japonais pour changer la langue en japonais" />
                </Col>
            </Row>
        </div>
    )
}

export default Footer