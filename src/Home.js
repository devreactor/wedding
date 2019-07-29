import React from 'react';
import styled from 'styled-components';
import blueBanner from './images/waterColor.jpg';
import mainPic from './images/deniseAndBill.jpg';
import {Container,Col,Row} from 'react-bootstrap';
import Hotels from './Hotels';
import {SubHeader} from './styles';
import Map from './Map';
import SuggestedAirport from './SuggestedAirport';


const Banner = styled.div`
  background-image: url(${blueBanner});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 5px;
  width: 100%;
`;

const MainPic = styled.img`
  width: 100%;
  margin: 60px auto 20px;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.3);
  font-style: italic;
`;

const Header = styled.h1`
  font-size: 60px;
  font-size: Quicksand;
  font-weight: bold;
  color: #f2a9cb;
`;

const Separator = styled.div`
  height: 1px;
  width: 300px;
  margin: 40px auto;
  background: rgba(0,0,0,0.3);
`;


const Home = () => {
  return(
    <div>
      <Banner />
      <Container>
        <Row>
          <Col sm={0} md={3} />
          <Col sm={12} md={6} >
            <div style={{textAlign:'center'}}>
              <MainPic src={mainPic} alt='Denise and Bill' />
              <Header>The Wedding</Header>
              <i>
                <p>Saturday, September 21, 2019</p>
                <p>4:00 PM</p>
                <p>Attire: Semi Formal</p>
              </i>

              <Separator/>

              <Map/>

              <Separator/>

              <SuggestedAirport />


            </div>
          </Col>
          <Col sm={0} md={3} />
        </Row>
      </Container>
      <Separator />
      <Hotels />



      <img src={blueBanner} width='100%' alt='bottom_border' />
    </div>
  );
};

export default Home;
