import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDCNveWoIQ9Adam2bVYjO815w355Awy3hg",
  authDomain: "reactjs-db5d2.firebaseapp.com",
  databaseURL: "https://reactjs-db5d2.firebaseio.com",
  projectId: "reactjs-db5d2",
  storageBucket: "reactjs-db5d2.appspot.com",
  messagingSenderId: "552703552839"
};

const items = [
  <MenuItem key={1} value={1} primaryText="Medicine" />,
  <MenuItem key={2} value={2} primaryText="Hospital" />,
  <MenuItem key={3} value={3} primaryText="Dokter" />,
];



class Header extends Component {

  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});
  userLogout(){
      firebase.auth().signOut();
      document.location.href = '/login';
  }
  render() {
    return (
      <MuiThemeProvider>
      <nav>
          <div id="nav">
              <Link to="/" id="logo">SCMES</Link>
              <Link to="/" id="Home">Home</Link>
              <Link to="/News" id="News">News</Link>
              <Link to="/Booking" id="Booking">Booking</Link>
              <Link to="/Review" id="Review">Review</Link>
              <Link to="/Contact" id="Contact">Contact us</Link>
              <Link to="/About" id="About">About us</Link>

              <a data-toggle="modal" data-target="#exampleModalCenter" id="userspace1" style={{marginRight: '40%'}}>
                Search
              </a>

              <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                        <span className="glyphicon glyphicon-search"></span>
                          <TextField
                           hintText="Medicine"
                         /><br />
                         <SelectField
                           value={this.state.value}
                           onChange={this.handleChange}
                           floatingLabelText="Option"
                           floatingLabelFixed={true}
                           hintText="Category"
                         >
                           {items}
                         </SelectField>
                          <button type="button" className="btn btn-success" id="btnsearch" >Search</button>
                          <div id="result">
                              <p>Hasil Pencarian</p>
                          </div>
                      </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <button id="hiding" onClick={this.userLogout} style={{float:'right',marginTop:'-35px',backgroundColor:'orange'}} className="hide">logout</button>
          </div>
   </nav>
 </MuiThemeProvider>
    );
  }
}

export default Header;
