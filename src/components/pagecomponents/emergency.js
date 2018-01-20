import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Emergency extends Component {

  componentDidMount(){
    document.title = "Emergency";
  };
  render() {
    return (
      <div className="container-fluid">
        <h2 id="emergencytitle">Pertolongan Darurat</h2>
        <div className="col-md-9" style={{marginLeft: '10%'}}>
       <div id="emergencyitem">
           <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" style={{width: '200px',height: '200px'}} id="imageemergency" alt=""/>
           <div id="emergencyinfo">
               <textarea className="form-control" placeholder="Informasi Penting keterangan dan Nomor HP Data yang Lengkap akan mempercepat verifikasi" name="infoemergency" cols="12" rows="8" id="emergencyiteminfo"></textarea>
           </div>
         </div>
       </div>
       <div className="col-md-9" style={{marginLeft: '20%', marginTop:'250px'}}>
      <div id="Buttons">
          <button type="button" className="btn btn-info" id="addimageemergency">Tambah Gambar</button>
          <button type="button" className="btn btn-info" id="addlocation">Tambah Lokasi</button>
          <button type="button" className="btn btn-info" id="autolocation">Otomatis Deteksi Lokasi</button>
      </div>
    </div>
       <Link to="/"><button type="button" className="btn btn-danger" id="btnreport">Laporkan</button></Link>
     </div>
    );
  }
}

export default Emergency;
