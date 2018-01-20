import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Authen from './authen';

export default class Login extends Component {
  componentDidMount(){
    document.title = "Login";
  };

  constructor(props){
    super(props);
    this.state={
      username: "",
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
      this.setState({username: evt.target.value});
  }

  handlePassword(evt){
    this.setState({password: evt.target.value});
  }

  submitForm(evt){
    evt.preventDefault();
    if(this.state.username === "admin" && this.state.password === "admin")
    {
      this.props.history.push('/');
    }
    else{
      this.setState({
        open: true,
      });
    }
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
                      floatingLabelText = "Username"
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
