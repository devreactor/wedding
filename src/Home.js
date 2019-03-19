import React from 'react';
import styled from 'styled-components';
import blueBanner from './images/waterColor.jpg';
import mainPic from './images/deniseAndBill.jpg';
import {Container,Col,Row} from 'react-bootstrap';


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

const SubHeader = styled.h2`
  font-size: 30px;
  font-size: Quicksand;
  font-weight: bold;
  color: #666;
`;

const googleMaps = {
  __html: `<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=golf%20club%20at%20newcastle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.lic{color:red;background-color:white;padding:10px;position:absolute;z-index:999;border-radius: 20px 20px 0 0;right:60px;bottom:0;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>`
};

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

              <SubHeader>Ceremony and Reception</SubHeader>
              <i>
                <p>The Golf Club At Newcastle</p>
                <p>15500 Six Penny Ln, Newcastle, WA 98059, USA</p>
              </i>
              <br/>
              <div style={{display:'inline-block'}} dangerouslySetInnerHTML={googleMaps} />
            </div>
          </Col>
          <Col sm={0} md={3} />
        </Row>
      </Container>
      <img src={blueBanner} width='100%' />
    </div>
  );
};

export default Home;
