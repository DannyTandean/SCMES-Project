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
        <div className="row">
        <div className="col-md-3">
          &nbsp;
        </div>
        <div className="col-md-8">
      <div id="newsitem">
     <h3 id="newsitemall">
     berita 1
     </h3>
     <h2 style={{textAlign: 'center'}}>News</h2>
     <p>
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
     </p>

     <h3 id="newsitemall">
     berita 2
     </h3>

     <p>
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
     </p>

     </div>
     </div>
   </div>
         <Link to="/Emergency"><button type="button" className="btn btn-danger" id="emergencybutton">Emergency Button</button></Link>
      </div>
    );
  }
}

export default News;
