import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import github from '../../media/links/github.png';
import linkedin from '../../media/links/linkedin.png';
import portfolio from '../../media/links/portfolio.png';
import resume from '../../media/links/resume.png';
import './HomePage.css';

class HomePage extends Component {
  state = {};

  componentWillMount() {}

  render() {
    return (
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          color: '#ffffff',
          textAlign: 'center',
        }}
        fluid
      >
        <Row>
          <h1>Patrick Bullion</h1>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <h3>Software Developer</h3>
        </Row>
        <Row>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            xs={12}
          >
            <Link to={'/portfolio'}>
              <img className='linkImages' src={portfolio} />
            </Link>
            <a href='https://s3-us-west-2.amazonaws.com/patrickbullion.com/resume/patrick_bullion_resume.pdf'>
              <img className='linkImages' src={resume} />
            </a>
            <a href='https://www.linkedin.com/in/patrickbullion'>
              <img className='linkImages' src={linkedin} />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
