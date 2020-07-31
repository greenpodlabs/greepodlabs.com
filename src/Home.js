import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Home.scss'

const Home = () => (
    <Row>
        <Col md={{ span: 3, offset: 0 }}>
            <img
                src="/assets/images/sustainability.svg"
                width="500"
                height="350"
                className="d-block align-middle illustration"
                alt="Greenpod Labs"
            />
        </Col>
        <Col md={{ span: 6, offset: 2 }}>
            <Container id="tagline">
                <h1><b>Nature</b> Inspired Solutions to Minimize Food Waste.</h1>
                <span>Our solution uses a unique composition of active compounds which creates a controlled environment which slows down the ripening rate and limits microbial growth.</span>
                <Row>
                    <Col md={{ span: 6, offset: 0 }}>
                        <Button variant="primary" href="#">LEARN MORE</Button>{''}
                    </Col>
                </Row>
            </Container>
        </Col>
    </Row>
);

export default Home;