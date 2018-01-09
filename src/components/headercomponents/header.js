import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      // <header>
      //   <div className="row">
      //     <div className="col-md-2">
      //         <div className="logo">
      //           <Link to="/">SCMES</Link>
      //         </div>
      //     </div>
      //     <div className="col-md-7">
      //     <nav>
      //       <ul>
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/">News</Link>
      //         </li>
      //         <li>
      //           <Link to="/">Booking</Link>
      //         </li>
      //         <li>
      //           <Link to="/">Review</Link>
      //         </li>
      //         <li>
      //           <Link to="/">Contact</Link>
      //         </li>
      //         <li>
      //           <Link to="/">Partner</Link>
      //         </li>
      //         <li>
      //           <Link to="/contact">About</Link>
      //         </li>
      //
      //       </ul>
      //     </nav>
      //     </div>
      //     <div className="col-md-2 pull-right navtopminus">
      //       <ul>
      //         <li>
      //           <Link to="/">Login</Link>
      //         </li>
      //         <li>
      //           <Link to="/">Sign in</Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </header>
      <nav>
          <div id="nav">
              <Link to="/" id="logo">SCMES</Link>
              <Link to="/" id="Home">Home</Link>
              <Link to="/News" id="News">News</Link>
              <Link to="/Booking" id="Booking">Booking</Link>
              <Link to="/Review" id="Review">Review</Link>
              <Link to="/Contact" id="Contact">Contact us</Link>
              <Link to="/" id="Partners">Partners</Link>
              <Link to="/About" id="About">About us</Link>
              <Link to="/" id="userspace1">Login</Link>
              <Link to="/" id="userspace2">Sign up</Link>
          </div>
   </nav>
    );
  }
}

export default Header;
