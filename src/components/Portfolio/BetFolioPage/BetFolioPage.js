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
import demo8 from '../../../media/betFolio/8.PNG';
import demo9 from '../../../media/betFolio/9.PNG';
import demo10 from '../../../media/betFolio/10.PNG';
import demo11 from '../../../media/betFolio/11.jpeg';

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
            <a href='https://apps.apple.com/us/app/betfolio/id1524118961'>
              <img style={{ width: 135, height: 40 }} src={appStoreIcon} />
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: 25, marginBottom: 25 }}>
          <Col
            xs={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#ffffff',
              fontSize: 25,
            }}
          >
            I wanted an app to be able to see how all of my bets are doing in
            real time, and not have to check back and forth between my betting
            site and ESPN.
            <ul
              style={{
                textAlign: 'left',
                color: '#ffffff',
                fontSize: 25,
                marginLeft: '10%',
                marginRight: '10%',
                marginTop: 5,
              }}
            >
              <li>Available on the Apple App Store</li>
              <li>Over 2,000 downloads in the first month</li>
              <li>
                45% retention rate according to the Apple App Reports (hard to
                calculate in my opinion because the app is mainly used on
                Saturday and Sundays)
              </li>
              <li>
                Can send your bets to your friends as well so they don’t have to
                enter them in their own phone if you are betting together
              </li>
              <li>
                If betting the over/under it'll calculate the total score and
                show you how many more points you need or can allow
              </li>
              <li>
                If betting the spread it'll show the teams spread score next to
                their actual score
              </li>
            </ul>
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
            <img src={demo9} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo8} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo11} />
          </Col>{' '}
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              marginTop: 5,
            }}
          >
            <img src={demo10} />
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
