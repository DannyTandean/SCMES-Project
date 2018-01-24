import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Authen from './authen';
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
firebase.initializeApp(config);

const auth = firebase.auth();


// function writeUserData(userId, name, password,phone,email) {
// firebase.database().ref('Register'+name).set({
//   username: name,
//   password: password,
//   phone:phone,
//   email:email
// } );
// }

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: "1",
      username: "",
      password: "",
      email: "",
      phone: "",
      condi: false
    };
  }

  componentDidMount(){
    document.title = "Register";
  };

  handleUsername(evt){
    this.setState({username: evt.target.value});
  }

  handlePass(evt){
    this.setState({password: evt.target.value});
  }

  handleEmail(evt){
    this.setState({email: evt.target.value});
  }

  handlePhone(evt){
    this.setState({phone: evt.target.value});
  }

  submitFormRegis(evt){
    evt.preventDefault();
    // writeUserData(this.state.userID,this.state.username,this.state.password,this.state.phone,this.state.email);
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
    this.props.history.push('/login');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="row" style={{marginTop : '10%'}}>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
            <form>
               <TextField
                 floatingLabelText = "Username"
                 onChange={this.handleUsername.bind(this)}
               />
               <TextField
                 floatingLabelText = "password"
                 type = "password"
                 onChange={this.handlePass.bind(this)}
               />
               <TextField
                 floatingLabelText = "Email"
                 type = "email"
                 onChange={this.handleEmail.bind(this)}
               />
               <TextField
                 floatingLabelText = "Phone"
                 type = "number"
                 onChange={this.handlePhone.bind(this)}
               />
               <br/>
               <button className="btn btn-primary" type="submit" style={{width:'80%'}} onClick={this.submitFormRegis.bind(this)}>Register</button>
               </form>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
