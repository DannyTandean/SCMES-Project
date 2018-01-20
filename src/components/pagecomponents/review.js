import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
// import imgs from './image/noimage.jpg';

class Review extends Component {

  componentDidMount(){
    document.title = "Review";
  };
  render() {
    return (
      <div className="container" >
       <div className="row">
         <div className="col-md-1">
           &nbsp;
         </div>
         <div className="col-md-10">
           <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{marginLeft: '30%',marginTop: '40px'}}>
            <li className="nav-item" >
              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Dokter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Rumah Sakit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Obat</a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div id="reviewdata">
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Dokter1</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                      </div>

                  </div>
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Dokter 2</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                      </div>

                  </div>
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Dokter 3</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                      </div>

                  </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div id="reviewdata">
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Rumah Sakit 1</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                      </div>

                  </div>
                  <div id="reviewdataitem">
                      <img src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>rumah Sakit 2</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                      </div>

                  </div>
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Rumah Sakit 3</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                      </div>

                  </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div id="reviewdata">
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Obat 1</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                      </div>

                  </div>
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>obat 2</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                      </div>

                  </div>
                  <div id="reviewdataitem">
                      <img alt="" src="adsaad.jpg" id="reviewimage"/>
                      <div id="reviewtext"><h5>Obat 3</h5>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam nec facilisis ligula. Aenean libero leo, aliquam quis auctor ac, tristique
              sed lectus. Nunc sit amet purus congue,
                      </p>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                      </div>

                  </div>
              </div>
            </div>
          </div>
         </div>
       </div>
       <Link to="/emergency"><button type="button" className="btn btn-danger" id="emergencybutton">Emergency Button</button></Link>
     </div>

    );
  }
}

export default Review;
