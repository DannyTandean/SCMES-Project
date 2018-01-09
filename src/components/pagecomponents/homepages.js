import React, { Component } from 'react';

class Homepage extends Component {

  componentDidMount(){
    document.title = "Home";
  };

  render() {
    return (
      <div className="container-fluid">
      <div id="left">
         <h5>Informasi</h5>
          <div id="accordion" role="tablist">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                      Dokter
                    </a>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <p>Dokter ini telah menyembuh kan A.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                      Rumah Sakit
                    </a>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    Rumah Sakit sudah menjadi pusat perhatian.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                      Obat
                    </a>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    Pemnyembuhan terbaru ampuh untuk malaria.
                  </div>
                </div>
              </div>
              </div>
        </div>
      <div id="content">
         <h1>SCMES Indonesia <span className="glyphicon glyphicon-search"></span></h1>
         <p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
         sed lectus. Nunc sit amet purus congue, ornare felis nec, sodales felis. Aliquam
         non euismod est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
         posuere cubilia Curae; Sed vestibulum mauris justo, et aliquet mauris bibendum sed.
         Sed accumsan a ligula sit amet dapibus. Aliquam erat volutpat. Phasellus viverra mi
         vel nisl imperdiet vehicula. Mauris purus libero, volutpat in blandit rhoncus,
         hendrerit non dolor. Nulla in risus porta, sagittis sapien et, aliquet ligula.
         Vivamus lectus nulla, ultricies eget arcu sed, pharetra tincidunt lacus. Donec
         aliquet elementum tristique. Donec vitae cursus tellus.
         </p>
          <br/>
          <br/>
          <p>
             &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
         sed lectus. Nunc sit amet purus congue, ornare felis nec, sodales felis. Aliquam
         non euismod est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
         posuere cubilia Curae; Sed vestibulum mauris justo, et aliquet mauris bibendum sed.
         Sed accumsan a ligula sit amet dapibus. Aliquam erat volutpat. Phasellus viverra mi
         vel nisl imperdiet vehicula. Mauris purus libero, volutpat in blandit rhoncus,
         hendrerit non dolor. Nulla in risus porta, sagittis sapien et, aliquet ligula.
         Vivamus lectus nulla, ultricies eget arcu sed, pharetra tincidunt lacus. Donec
         aliquet elementum tristique. Donec vitae cursus tellus.
         </p>
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
         <a href="emergency.html"><button type="button" className="btn btn-danger" id="emergencybutton" >Emergency Button</button></a>
      </div>

    );
  }
}

export default Homepage;
