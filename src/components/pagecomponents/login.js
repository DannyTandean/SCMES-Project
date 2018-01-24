import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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


export default class Login extends Component {
  componentDidMount(){
    document.title = "Login";
  };

  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      open: false,
    };
  }
   handleRequestClose = () => {
     this.setState({
       open: false,
     });
   };

  handleLogin(evt) {
      this.setState({email: evt.target.value});
  }

  handlePassword(evt){
    this.setState({password: evt.target.value});
  }

  submitForm(evt){
    evt.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
    firebase.auth().onAuthStateChanged(firebaseUser =>{
      if(firebaseUser){
        var x = document.getElementById('hiding');
        x.classList.add('showing');
        this.props.history.push('/');
      }
      else{
        this.setState({
          open: true,
        });
      }
    });

  }

  render(){
    return(
      <MuiThemeProvider>
        <div className="container">
            <div className="row" style={{marginTop : '10%'}}>
                <div className="col-md-4">
                  &nbsp;
                </div>
                <div className="col-md-4">
                  <form onSubmit={this.submitForm.bind(this)}>
                    <TextField
                      floatingLabelText = "Email"
                      type = "email"
                      onChange={this.handleLogin.bind(this)}
                    />
                    <TextField
                      floatingLabelText = "Password"
                      type = "password"
                      onChange={this.handlePassword.bind(this)}
                    />
                    <br/>
                    <button type="submit" className="btn btn-primary" style={{marginTop: '20px', width: '80%'}}>Login </button>
                  </form>
                  <Snackbar
                    open={this.state.open}
                    message="Failed Login"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                  />
                </div>
            </div>
            <div className="row" style={{marginTop: '20px'}}>
              <div className="col-md-4">
                &nbsp;
              </div>
                <div className="col-md-4" style={{paddingLeft: '5%'}}>
                    Didn't have account? <Link to='/register'>Sign up</Link>
                </div>
            </div>
        </div>
      </MuiThemeProvider>

    );
  }
}
