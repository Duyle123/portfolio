//========= Import Bootstrap ==============
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {gsap, Power3} from 'gsap';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

function HomePage() {
    return (
        <Container fluid className='hero justify-content-center strawford-bold'>
            <Row lg={8} fluid>
                <Col sm={1} className='hero-container-1'>hello</Col>
                <Col sm={1} className='hero-container-1'>put info here</Col>
            </Row>
            <Row lg={8} fluid className='justify-content-center'>
                <Col lg={7} className='justify-content-center hero-container-1'>
                    <Row md={7} className=' title ch2 strawford-bold'> DUY PORTFOLIO </Row>
                    <Row md='auto' className='ch3'> <a className='strawford-light l-link' href="">Projects</a> </Row>
                    <Row md='auto' className='ch3'> <a className='strawford-light l-link' href="">Writing Samples</a> </Row>
                    <Row md='auto' className='ch3'> <a className='strawford-light l-link' href="">Contact</a> </Row>
                </Col>
                <Col lg={3} className="hero-container-2">

                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;