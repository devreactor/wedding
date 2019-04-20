import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import styled from 'styled-components';
import {SubHeader} from './styles';


const Tile = styled.a`
  display: block;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  padding-bottom: 20px;
  color: #333;

  :hover {
    text-decoration: none;
    color: #333;
  }

`;

const HotelImage = styled.div`
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-bottom: 10px;
`;

const Small = styled.div`
  font-size: 12px;
  color: #666;
`;

const Address = styled.address`
  margin-top: 20px;
  margin-bottom: 20px;
`;


const Hotels = () => (
  <Container>
    <div style={{textAlign:'center',marginBottom:'60px'}}>
      <SubHeader>Suggested Hotels</SubHeader>
    </div>
    <Row>
      <Col md={4} sm={12}>
        <Tile target='_blank' href='https://www.marriott.com/hotels/travel/bvuwh-w-bellevue/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'>
          <HotelImage src='https://cache.marriott.com/marriottassets/marriott/BVUWH/bvuwh-exterior-0299-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*' />
          <div style={{fontSize:20}}>W Bellevue by Marriott</div>
          <Small>located in the heart of Downtown Bellevue</Small>
          <Address>
            10455 NE 5th Place<br/>
            Bellevue, WA<br/>
            98004
          </Address>
          <div>425-709-9000</div>
        </Tile>
      </Col>
      <Col md={4} sm={12}>
        <Tile target='_blank' href='https://embassysuites3.hilton.com/en/hotels/washington/embassy-suites-by-hilton-seattle-bellevue-SEABLES/index.html'>
          <HotelImage src='https://embassysuites3.hilton.com/resources/media/es/SEABLES/en_US/img/shared/full_page_image_gallery/main/ES_exteriorview_2_1280x430_FitToBoxSmallDimension_Center.jpg' />
          <div style={{fontSize:20}}>Embassy Suits Bellevue</div>
          <Small>just off I-90</Small>
          <Address>
            3225 158th Ave SE<br/>
            Bellevue, WA<br/>
            98008
          </Address>
          <div>425-644-2500</div>
        </Tile>
      </Col>
      <Col md={4} sm={12}>
        <Tile target='_blank' href='https://www.hyatt.com/en-US/hotel/washington/hyatt-regency-lake-washington-at-seattles-southport/searl'>
          <HotelImage src='https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/09/10/1146/Hyatt-Regency-Lake-Washington-at-Seattles-Southport-P070-Exterior.jpg/Hyatt-Regency-Lake-Washington-at-Seattles-Southport-P070-Exterior.16x9.adapt.1280.720.jpg' />
          <div style={{fontSize:20}}>The Hyatt Regency Southport</div>
          <Small>on Lake Washington</Small>
          <Address>
            1053 Lake Washington Blvd N<br/>
            Renton, WA<br/>
            98056
          </Address>
          <div>425-203-1234</div>
        </Tile>
      </Col>
    </Row>
  </Container>
);

export default Hotels;
