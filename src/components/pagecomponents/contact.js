import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Contact extends Component {

  componentDidMount(){
    document.title = "Contact";
  };
  render() {
    return (
      <div className="container">
        <h1>SCMES Indonesia</h1>
        <p>
          The GNU General Public License is intended to guarantee your freedom to share and change free software – to make sure the software is free for all its users. This General Public License applies to most of the Free Software Foundation’s software and to any other program whose authors commit to using it. (Some other Free Software Foundation software is covered by the GNU Library General Public License instead.) You can apply it to your programs, too.
          If you buy a template released under this GNU General Public License v3.0, you can use it on any number of projects belonging to either you or your clients without any limitations.
          This license allows you to modify the template and its sources to suit your needs. You can also redistribute the customized template under the terms of the GPL license, so it’s a great solution in case you’re a website developer working on a few websites at time.
          In case the theme is released under the GNU GPLv3 license the stock images used in this theme and its .psd source files are not included to the delivered package, as they do not fall under the GPL license.
          After the template installation you will see blurred images (or placeholders) included for demo preview purposes only. You will need to replace them with your own images on the live website.
          All the third-party plugins in our themes (in case there are any) may not be licensed under the GPL and it’s your responsibility to check what license they are covered by.
      </p>
       <button type="button" className="btn btn-danger" id="emergencybutton"><Link to="/emergency" style={{color:'white'}}>Emergency Button</Link></button>
      </div>
    );
  }
}

export default Contact;
