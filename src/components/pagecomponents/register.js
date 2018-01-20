import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Authen from './authen';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone: ""
    };
  }
  // 
  // componentWillMount(){
  //   var database = firebase.database();
  // };
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
    this.firebaseRef.push(this.state);
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
