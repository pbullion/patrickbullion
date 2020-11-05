import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BetFolioPage.css';
import { Link } from 'react-router-dom';
import appStoreIcon from '../../../media/appstoreicon.png';
import betFolioIcon from '../../../media/BetFolio.png';
import demo1 from '../../../media/betFolio/1.png';
import demo2 from '../../../media/betFolio/2.png';
import demo3 from '../../../media/betFolio/3.png';
import demo4 from '../../../media/betFolio/4.png';
import demo5 from '../../../media/betFolio/5.png';
import demo6 from '../../../media/betFolio/6.PNG';
import demo7 from '../../../media/betFolio/7.PNG';

class BetFolioPage extends Component {
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
          textAlign: 'center',
        }}
      >
        <Row>
          <Col
            xs={12}
            style={{
              marginTop: 50,
            }}
          >
            <img style={{ width: 300, height: 300 }} src={betFolioIcon} />
          </Col>
          <Col xs={12}>
            {/* <a href='https://apps.apple.com/us/app/betfolio/id1524118961'>
              <img style={{ width: 135, height: 40 }} src={appStoreIcon} />
            </a> */}
            <a href='betfolio://'>
              <img style={{ width: 135, height: 40 }} src={appStoreIcon} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo1} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo2} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo3} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo4} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo5} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo6} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo7} />
          </Col>
        </Row>
        <h4 style={{ marginTop: 15, marginBottom: 50 }}>
          <Link to={'/portfolio'}>BACK</Link>
        </h4>
      </Container>
    );
  }
}

export default BetFolioPage;
