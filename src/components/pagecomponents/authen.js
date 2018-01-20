import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Authen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password,
      email: this.props.email,
      phone: this.props.phone
    };
  }


  render() {
    return (
        <div className="container" style={{color: 'black'}}>
          {this.props.username}
          {this.state.username}
        </div>
    );
  }
}
