import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class News extends Component {

  componentDidMount(){
    document.title = "News";
  };
  render() {
    return (
      <div className="container-fluid">
      <div id="newsitem">
     <h3 id="newsitemall">
     berita 1
     </h3>

     <pre id="pre">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
     sed lectus.
     Nunc sit amet purus congue, ornare felis nec, sodales felis.
     Aliquam
     non euismod est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
     posuere cubilia Curae; Sed vestibulum mauris justo, et aliquet mauris bibendum sed.
     Sed accumsan a ligula sit amet dapibus. Aliquam erat volutpat. Phasellus viverra mi
     vel nisl imperdiet vehicula. Mauris purus libero, volutpat in blandit rhoncus,

     hendrerit non dolor. Nulla in risus porta, sagittis sapien et, aliquet ligula.
     Vivamus lectus nulla, ultricies eget arcu sed, pharetra tincidunt lacus. Donec

     aliquet elementum tristique. Donec vitae cursus tellus.
     </pre>

     <h3 id="newsitemall">
     berita 2
     </h3>

     <pre id="pre">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
     sed lectus. Nunc sit amet purus congue, ornare felis nec, sodales felis. Aliquam
     non euismod est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
     posuere cubilia Curae; Sed vestibulum mauris justo, et aliquet mauris bibendum sed.
     Sed accumsan a ligula sit amet dapibus. Aliquam erat volutpat. Phasellus viverra mi
     vel nisl imperdiet vehicula. Mauris purus libero, volutpat in blandit rhoncus,
     hendrerit non dolor. Nulla in risus porta, sagittis sapien et, aliquet ligula.
     Vivamus lectus nulla, ultricies eget arcu sed, pharetra tincidunt lacus. Donec
     aliquet elementum tristique. Donec vitae cursus tellus.
     </pre>

     </div>
     <div id="right">
      <h4>Pencarian</h4>
    <span className="glyphicon glyphicon-search"></span>
     <input className="Bootstrap"type="text" name="search" id="searchbar" placeholder="Rumah sakit , berita , obat ....."/>
      <h7>Kategori</h7>
      <select id="option">
            <option value="volvo">Rumah Sakit</option>
            <option value="saab">Dokter</option>
            <option value="mercedes">Obat</option>
      </select>
      <button type="button" className="btn btn-success" id="btnsearch" >Search</button>
      <div id="result">
          <p>Hasil Pencarian</p>
      </div>
      </div>
         <a href="emergency.html"><button type="button" className="btn btn-danger" id="emergencybutton">Emergency Button</button></a>
      </div>
    );
  }
}

export default News;
