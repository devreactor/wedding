import React from 'react';
import {SubHeader} from './styles';


const googleMaps = {
  __html: `<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=golf%20club%20at%20newcastle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.lic{color:red;background-color:white;padding:10px;position:absolute;z-index:999;border-radius: 20px 20px 0 0;right:60px;bottom:0;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>`
};

const Map = () => (
  <div>
    <SubHeader>Ceremony and Reception</SubHeader>
    <i>
      <p>The Golf Club At Newcastle<br/>15500 Six Penny Ln, Newcastle, WA 98059, USA</p>
    </i>
    <br/>
  <div style={{display:'inline-block'}} dangerouslySetInnerHTML={googleMaps} />
  </div>
);

export default Map;
