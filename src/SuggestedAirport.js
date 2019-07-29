import React from 'react';
import {SubHeader} from './styles';


const googleMaps = {
  __html: `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.035374533573!2d-122.3110051835762!3d47.45024987917447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435542eafefd%3A0x99d3d9c4c7dc37b7!2sSeattle-Tacoma+International+Airport!5e0!3m2!1sen!2sus!4v1564443818039!5m2!1sen!2sus" width="300" height="300" frameborder="0" style="border:0" allowfullscreen></iframe></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.lic{color:red;background-color:white;padding:10px;position:absolute;z-index:999;border-radius: 20px 20px 0 0;right:60px;bottom:0;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>`
};

const Map = () => (
  <div>
    <SubHeader>Suggested Airport</SubHeader>
    <i>
      <p>Seattle-Tacoma<br/>International Airport</p>
    </i>
    <br/>
  <div style={{display:'inline-block'}} dangerouslySetInnerHTML={googleMaps} />
  </div>
);

export default Map;
