import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/headercomponents/header';
import Homepage from './components/pagecomponents/homepages';
import Booking from './components/pagecomponents/booking';
import Contact from './components/pagecomponents/contact';
import News from './components/pagecomponents/news';
import Review from './components/pagecomponents/review';
import About from './components/pagecomponents/about';
import Login from './components/pagecomponents/login';
import Register from './components/pagecomponents/register';
import Emergency from './components/pagecomponents/emergency';

import './assets/style.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Homepage}/>
          <Route path="/booking" component={Booking}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/news" component={News}/>
          <Route path="/review" component={Review}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/emergency" component={Emergency}/>
        </div>
      </Router>
    );
  }
}

export default App;
